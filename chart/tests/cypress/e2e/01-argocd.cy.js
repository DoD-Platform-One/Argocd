//If values are specified use those, otherwise, use default values
//Waiting for application health alone can take up to 2 minutes in certain scenarios
const argoLivenessTimeout = Cypress.env("timeout") ?? 120_000;
const loadLoginSession = () => {
  cy.session("login", () => {
    cy.visit("/login", { timeout: argoLivenessTimeout });
    if (Cypress.env("keycloak_test_enable")) {
      cy.get("a > .argo-button").click();
      cy.performKeycloakLogin(
        Cypress.env("tnr_username"),
        Cypress.env("tnr_password"),
      );
    } else {
      standardLogin(Cypress.env("user"), Cypress.env("password"));
    }
  });
};

export const standardLogin = (user, pass) => {
  cy.contains("Username").type(user, { delay: 250 });
  cy.get('input[type="password"]').type(pass, { delay: 250 });

  //We need to wait long enough for this to complete to prevent 401 errors later
  cy.intercept({ method: "POST", url: "**/api/v1/session" }).as("validSession");
  cy.get('button[type="submit"]').click();
  cy.wait("@validSession").then((interception) => {
    expect(interception.response.statusCode).to.equal(200);
  });
};

const testConfig = {
  baseUrl: Cypress.env("url"),
  retries: { runMode: 3, openMode: 3 },
};

describe("ArgoCD Test", testConfig, () => {
  const testCfg = { retries: { runMode: 3, openMode: 3 } };
  it("Should be able to log into the system", testCfg, () => {
    cy.visit("/applications");

    cy.log("confirm application create button is visible");
    cy.get('button[qe-id="applications-list-button-new-app"]').should("exist");
  });
});

beforeEach(() => {
  loadLoginSession();
});

after(() => {
  Cypress.session.clearCurrentSessionData;
});
