//Define this once so it can easily be updated in the future as its used a few times
const applicationName = 'bb-cypress-test'

//If values are specified use those, otherwise, use default values
//Waiting for application health alone can take up to 2 minutes in certain scenarios
const customTimeout = Cypress.env('timeout') ?? 120000

export const standardLogin = (user, pass) => {
  cy.contains('Username').type(user, {delay: 0})
  cy.get('input[type="password"]').type(pass, {delay: 0})

  //We need to wait long enough for this to complete to prevent 401 errors later
  cy.intercept('POST', '**/api/v1/session').as('validSession')
  cy.get('button[type="submit"]').click()
  cy.wait('@validSession').then((interception) => {
    expect(interception.response.statusCode).to.equal(200)
  })
}

export const createApplication = () => {
  cy.get('button[qe-id="applications-list-button-new-app"]').click()
  cy.get('input[qeid="application-create-field-app-name"]').type(applicationName)
  cy.get('input[qe-id="application-create-field-project"]').type('default')
  cy.get(':nth-child(5) > :nth-child(1) > .select > .select__value').click()
  cy.contains('Automatic').click()
  cy.get('input[id="sync-option-CreateNamespace-undefined"]').last().click()
  cy.get('input[qe-id="application-create-field-path"]').type('guestbook',{delay: 0})
  cy.get('input[qe-id="application-create-field-repository-url"]').type('https://repo1.dso.mil/big-bang/apps/sandbox/argo-example-guestbook-app.git',{delay: 0})
  cy.get('input[qe-id="application-create-field-cluster-url"]').type('https://kubernetes.default.svc',{delay: 0})
  cy.get('input[qeid="application-create-field-namespace"]').type('argocd',{delay: 0})
  cy.get('button[qe-id="applications-list-button-create"]').click()
}

export const deleteApplication = () => {
  cy.get('.fa-times-circle').click()
  cy.get('input[qeid="name-field-delete-confirmation"]').focus()
  cy.get('input[qeid="name-field-delete-confirmation"]').type(applicationName, {force: true})
  cy.get('button[qe-id="prompt-popup-ok-button"]').click()

  //Wait for the application card to disappear before validating its gone
  cy.get(`div[class*="qe-applications-list"][class*=${applicationName}]`, {timeout: customTimeout}).should('not.exist')

  //Refresh the page to confirm the application can no longer be found
  cy.reload();
  cy.get('input[role="combobox"]').click()
  cy.get('.applications-list__search-wrapper').should('not.contain', applicationName)
}

describe('ArgoCD Test', () => {
  it('Should log into the system', () => {
    cy.visit(`${Cypress.env('url')}/login`)
    if (Cypress.env('keycloak_test_enable')) {
      cy.get('a > .argo-button').click()
      cy.performKeycloakLogin(Cypress.env('tnr_username'), Cypress.env('tnr_password'))
    } else {
      standardLogin(Cypress.env('user'), Cypress.env('password'))
    }
  })
//  it('Should create new application', () => {
//    cy.visit(`${Cypress.env('url')}/applications/`)
//    createApplication();
//    //Verify the app is listed as healthy
//    cy.get(`div[class*="qe-applications-list"][class*=${applicationName}]`, {timeout: customTimeout}).then((appDiv) => {
//      cy.wrap(appDiv).find('[qe-id="applications-tiles-health-status"]', {timeout: customTimeout}).should('contain', 'Healthy')
//    })
//  })
//  it('Should delete application', () => {
//    cy.visit(`${Cypress.env('url')}/${applicationName}`)
//    deleteApplication();
//  })
})

after(() => {
  Cypress.session.clearCurrentSessionData
})
