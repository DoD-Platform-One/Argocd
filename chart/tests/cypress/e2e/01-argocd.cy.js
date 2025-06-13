/**************************************
 *
 * Cypress config constants
 *
 **************************************/
// If values are specified use those, otherwise, use default values.
// Waiting for application health alone can take up to 2 minutes in certain scenarios.
const customTimeout = Cypress.env("timeout") ?? 120_000;

const testConfig = {
  // every cy.visit assumes this base URL
  baseUrl: Cypress.env("url"),

  // some argo UI actions can be flaky so let's give ourselves a second chance
  retries: { runMode: 3, openMode: 0 },

  // wait a good long while before giving up on an Argo UI element reaching expected state
  defaultCommandTimeout: customTimeout,
};

/**************************************
 *
 * Extracted user actions and helpers
 *
 **************************************/

const allowException = (errMessage) => {
  // n.b. this only ignores uncaught exceptions within the context of a single Cypress test
  cy.on("uncaught:exception", (err, runnable) => {
    if (err.message.includes(errMessage)) {
      return false;
    }
  });
};

const generateAppName = () => {
  const appNum = Math.floor(Math.random() * 99);
  return `bb-cypress-test-${appNum}`;
};

const loadLoginSession = () => {
  cy.session("login", () => {
    cy.visit("/login", { timeout: customTimeout });
    if (Cypress.env("keycloak_test_enable")) {
      cy.log("Logging in via keycloak...");
      cy.get("a > .argo-button").click();
      cy.performKeycloakLogin(
        Cypress.env("tnr_username"),
        Cypress.env("tnr_password"),
      );
    } else {
      cy.log("Logging in by typing in a username and password...");
      cy.contains("Username").type(Cypress.env("user"), { delay: 250 });
      cy.get('input[type="password"]').type(Cypress.env("password"), {
        delay: 250,
      });

      cy.log(
        "spy on session POST so we can wait until it completes, avoiding 401s later",
      );
      cy.intercept({ method: "POST", url: "**/api/v1/session" }).as(
        "validSession",
      );
      cy.get('button[type="submit"]').click();
      cy.wait("@validSession").then((interception) => {
        expect(interception.response.statusCode).to.equal(200);
      });
    }
  });
};

export const createApplication = (applicationName) => {
  // YAML format for editor. Includes {backspace} special instruction to defeat UI editors insistence
  // on adding tabs after new line.
  const createApplicationYamlKeystrokes = `
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: ${applicationName}
{backspace}spec:
  destination:
    {backspace}{backspace}namespace: 'argocd'
    {backspace}{backspace}server: 'https://kubernetes.default.svc'
    {backspace}{backspace}source:
    {backspace}path: helloworld
    {backspace}{backspace}repoURL: 'https://repo1.dso.mil/big-bang/apps/sandbox/argocd-example-helloworld-app.git'
      {backspace}{backspace}{backspace}{backspace}targetRevision: HEAD
  {backspace}{backspace}sources: []
  {backspace}project: 'default'
  {backspace}syncPolicy:
    {backspace}automated:
      {backspace}{backspace}prune: false
      {backspace}{backspace}{backspace}selfHeal: false
    {backspace}{backspace}{backspace}syncOptions:
      {backspace}{backspace}- CreateNamespace=true 
`.trimStart();

  const createAppButton = 'button[qe-id="applications-list-button-new-app"]';
  cy.get(createAppButton).click();

  cy.log("confirm application create button is visible");
  cy.get('button[qe-id="applications-list-button-new-app"]').should("exist");


  // cy.get(".application-create-panel").within(() => {
  //   const editAsAYamlbutton = ".application-create-panel__yaml-button";
  //   cy.get(editAsAYamlbutton).click();
  //
  //   cy.get(".yaml-editor").within(() => {
  //     let yamlTextArea = ".view-line";
  //     cy.get(yamlTextArea).should("be.visible");
  //
  //     cy.log("select bottom line in the YAML entry textarea");
  //     cy.get(yamlTextArea).last().click();
  //
  //     cy.log("select all and delete the existing YAML content");
  //     const selectAllKeystrokes =
  //       Cypress.platform == "darwin" ? "{command}a" : "{ctrl}a";
  //     cy.get(yamlTextArea)
  //       .last()
  //       .type(selectAllKeystrokes + "{del}");
  //
  //     cy.log("🧙 Ward against survivable argo-side exception");
  //     allowException("Cannot set properties of undefined (setting 'pressed')");

      // cy.log("... and then fill in the YAML entry textarea from our fixture");
      // cy.get(yamlTextArea)
      //   .last()
      //   .type(createApplicationYamlKeystrokes, { delay: 0 });

      // cy.log("click Save to extrude our YAML back into the regular input form");
      // cy.get(".yaml-editor__buttons").contains("Save").click();
  //   });
  // });

  // cy.log("locate and click the form submit button");
  // cy.get('button[qe-id="applications-list-button-create"]').scrollIntoView();
  // cy.get('button[qe-id="applications-list-button-create"]').click();
  //
  // cy.log("Verify the app is listed as healthy");
  // cy.get(`div[class*="qe-applications-list"][class*=${applicationName}]`, {
  //   timeout: customTimeout,
  // }).then((appDiv) => {
  //   cy.wrap(appDiv)
  //     .find('[qe-id="applications-tiles-health-status"]', {
  //       timeout: customTimeout,
  //     })
  //     .should("contain", "Healthy");
  // });
};

export const deleteApplication = (applicationName) => {
  cy.log("find application tile and click its delete button");
  const appTile = `.qe-applications-list-argocd_${applicationName}`;
  cy.get(appTile).scrollIntoView();
  cy.get(appTile).find('a[qe-id="applications-tiles-button-delete"]').click();

  cy.log("fill in the delete confirmation modal");
  cy.get(".popup-container").within(() => {
    cy.log("click to open up the confirmation field for typing");
    cy.get(".argo-form-row").first().click();

    cy.log("🧙 Ward against survivable argo-side exception");
    allowException("Cannot set properties of undefined (setting 'pressed')");

    cy.log("type in the app name");
    const confirmationText = 'input[qeid="name-field-delete-confirmation"]';
    cy.get(confirmationText).type(applicationName, { force: true });

    cy.log("click to submit the delete request");
    cy.get('button[qe-id="prompt-popup-ok-button"]').click();
  });

  cy.log(
    "Wait for the application card to disappear before validating it's gone",
  );
  cy.get(`div[class*="qe-applications-list"][class*=${applicationName}]`, {
    timeout: customTimeout,
  }).should("not.exist");

  cy.log(
    "refresh the applications page to confirm the application no longer shows up",
  );
  cy.reload();
  cy.get('input[role="combobox"]').click();
  cy.get(".applications-list__search-wrapper").should(
    "not.contain",
    applicationName,
  );
};

/**************************************
 *
 * Cypress test definitions and hooks
 *
 **************************************/

beforeEach(() => {
  loadLoginSession();
});

after(() => {
  Cypress.session.clearCurrentSessionData;
});

describe(
  `ArgoCD smoke tests [baseUrl: ${testConfig.baseUrl}]`,
  testConfig,
  () => {
    it("Should be able to log into the system and view the applications page", () => {
      cy.visit("/applications");

      cy.log("confirm application create button is visible");
      cy.get('button[qe-id="applications-list-button-new-app"]').should("exist");
    });

    // This app name will be used for both create and delete tests, so generate one here.
    // Tack on a random number at the end to avoid test collisions.
    // const applicationName = generateAppName();

    // it(`Should create new application named ${applicationName} via YAML config`, () => {
    //   cy.visit("/applications");
    //   createApplication(applicationName);
    // });

    // it(`Should delete application named ${applicationName}`, () => {
    //   cy.visit("/applications");
    //   deleteApplication(applicationName);
    // });

  },
);
