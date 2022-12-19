// the app throws an "Unauthorized" exception when you first visit without a token that will stop the test without this
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

// keep cookies between blocks (stay logged in if using SSO)
beforeEach(function () {
  cy.getCookies().then(cookies => {
    const namesOfCookies = cookies.map(cm => cm.name)
    Cypress.Cookies.preserveOnce(...namesOfCookies)
  })
})

// log in with with keycloak SSO
before(() => {
  cy.task('log', 'starting test...')
  cy.visit(Cypress.env('url'))
  if (Cypress.env('keycloak_test_enable')) {
    cy.task('log', 'logging in via keycloak...')
    cy.get('a > .argo-button').click()
    cy.get('input[id="username"]').type(Cypress.env('keycloak_username'))
    cy.get('input[id="password"]').type(Cypress.env('keycloak_password'))
    cy.get('input[id="kc-login"]').click()
    cy.get('input[id="kc-accept"]').click()
    cy.intercept('GET', '**/*').as('landingpage')
    cy.get('input[id="kc-login"]').click()
    // after hitting "yes" on the consent page, there should be a redirect back to the app (303)
    cy.wait('@landingpage').its('response.statusCode').should('eq', 303)
    cy.task('log', 'keycloak has redirected back to the app...')
    // then the app's page should load
    cy.wait('@landingpage').its('response.statusCode').should('eq', 200)
    cy.task('log', 'app homepage has loaded successfully...')
  } else { 
    cy.task('log', 'logging in with a static user...')
    cy.contains('Username').type(Cypress.env('user'),{delay: 0})
    cy.get('input[type="password"]').type(Cypress.env('password'),{delay: 0})
    cy.get('button[type="submit"]').click()
  }
  cy.task('log', 'logged in...')
})

describe('ArgoCD test', function() {
  // After entering the app's page by clicking on it's title, this function can be called. 
  // It will enter the application info window and then go to events. Note that the events are not refreshed
  // automatically, hence the need to close and reopen the window.
  // Adjust the next two variables to control the number of screenshots and interval between them.
  const screenshots = 5
  const ssinterval = 10000
  let j = 0
  function eventscreenshot () {
    j++
    cy.task('log', j)
    cy.get('.top-bar.row > .small-9 > :nth-child(1) > :nth-child(1)')
      .should('be.visible')
      .click()
    cy.get('.tabs__nav-wrapper > :nth-child(5)')
      .should('be.visible')
      .click()
    cy.get('.events-list > .argo-table-list > :nth-child(2) > .row')
      .should('be.visible')
    cy.task('log', 'taking a screenshot of the event log...')
    cy.screenshot()
    cy.get('.sliding-panel--opened > .sliding-panel__wrapper > .sliding-panel__close > span > .argo-icon-close')
      .click({force: true})
    if (j < screenshots) {
      cy.wait(ssinterval)
      eventscreenshot()
    } else {
      cy.task('log', 'hit max retries for the app sync button...')
      return
    }
  }
  // check to see if the test app's "synchronize resources" section is populated, if not close the pane and reopen
  const appsyncpaneretries = 5
  let h = 0
  function appsyncpane () { 
    h++
    cy.task('log', 'appsyncpane() called...')
    cy.get('a[qe-id="applications-tiles-button-sync"]', {timeout: 60000})
    .should('be.visible')
    .click({force: true})
    cy.wait(1000)
    // this is just to wait for the panel to slide out
    cy.get('.sliding-panel--is-middle > .sliding-panel__wrapper > .sliding-panel__close').should('be.visible')
    cy.get('body').then($body => {
      if($body.find('.application-sync-panel__resource').length > 0)  {
        cy.task('log', 'resources are showing up in the bottom of the sync pane...')
        return
      } else {
        cy.task('log', 'resources are not showing up in the sync pane, closing and recursing...')
        cy.get('.sliding-panel--is-middle > .sliding-panel__wrapper > .sliding-panel__header > div > .argo-button--base-o').last().click()
        if (h < appsyncpaneretries) {
          cy.wait(1000)
          appsyncpane()
        } else {
          cy.task('log', 'fatal error: hit max retries for appsyncpane()')
        }
      }
    })
  }
  // After entering the app's page by clicking on its title, this function can be called. 
  // check to see if the synchronize button is visible and begin a sync, if not retry sync process
  const appsyncbuttonretries = 5
  let i = 0
  function appsyncbutton () {
    i++
    cy.task('log', 'appsyncbutton() called...')
    cy.get('body').then($body => {
      cy.get('.sliding-panel--opened > .sliding-panel__wrapper > .sliding-panel__header > div > .argo-button--base', {timeout: 1000}).then($synchronize => {
      if ($synchronize.is(':visible')){
        cy.task('log', 'clicking \"out of sync\" to include all resources in the sync...')
        cy.get('[style="float: right;"] > :nth-child(2)').click()
        cy.task('log', 'clicking the synchronize button...')
        cy.get('.sliding-panel--opened > .sliding-panel__wrapper > .sliding-panel__header > div > .argo-button--base', {timeout: 1000}).last().click()
        return
      } else {
        cy.task('log', 'sync button not visible...')
        if (i < appsyncbuttonretries) {
          cy.wait(1000)
          cy.task('log', 'appsyncpane() called...')
          cy.get('a[qe-id="application-sync-panel-button-synchronize"]', {timeout: 30000})
          .should('be.visible')
          .click()
          appsyncbutton()
        } else {
          cy.task('log', 'fatal error: hit max retries for the app sync button...')
        }
      }
    })
   })
  }

// Recursive function to do reloads for the keycloak sso test until the app shows up. As described below, this is to 
// work around an issue with the argocd+keycloak integration.
const app_pageloops = 60
let k = 0
function app_page() {
  k++
  cy.task('log', 'app_page() called...')
  cy.get('body').then($body => {
    if ($body.find('.applications-list__title').length > 0){
      cy.task('log', 'test app is showing up, entering its page...')
      cy.get('.applications-list__title').click()
      return
    } else {
    if (k < app_pageloops) {
      cy.wait(1000)
      cy.reload()
      app_page()
    } else {
      cy.task('log', 'test app is not showing up after deploying...')
    }
    }
  })
}

  if (!Cypress.env('keycloak_test_enable')) {
    it('Having logged in with a local account, deploy and delete app in the ArgoCD UI', function() {
        cy.task('log', 'entering the app deployment test...')
        cy.contains('No applications yet', {timeout: 15000} )
        cy.get('button[qe-id="applications-list-button-new-app"]').click()
        cy.contains('Application Name').type('guestbook',{delay: 0})
        cy.get('input[qe-id="application-create-field-project"]').type('default',{delay: 0})
        cy.get('input[id="sync-option-CreateNamespace-undefined"]').last().click()
        cy.get('input[qe-id="application-create-field-path"]').type('guestbook',{delay: 0})
        cy.get('input[qe-id="application-create-field-repository-url"]').type('https://github.com/argoproj/argocd-example-apps.git',{delay: 0})
        cy.get('input[qe-id="application-create-field-cluster-url"]').type('https://kubernetes.default.svc',{delay: 0})
        cy.get('input[qeid="application-create-field-namespace"]').type('argocd',{delay: 0})
        cy.get('button[qe-id="applications-list-button-create"]').click()
        cy.task('log', 'pressed create on the test app...')
        appsyncpane ()
        appsyncbutton()
        cy.wait(2000)
        cy.get('.applications-list__title', {timeout: 15000})
          .should('be.visible')
          .contains('guestbook')
          .click()
        cy.task('log', 'entering test app stats page...')
        cy.get(':nth-child(2) > .application-status-panel__item-value > :nth-child(1)')
          .contains('Synced', { timeout: 180000 })
        cy.task('log', 'app is synced...')
        cy.get(':nth-child(1) > .application-status-panel__item-value')
          .contains('Healthy', { timeout: 180000 })
        cy.task('log', 'app is healthy...')
        cy.get(':nth-child(6) > .fa').click()
        cy.contains('Please type').click()
        cy.get('input[qeid="name-field-delete-confirmation"]').type('guestbook')
        cy.get('button[qe-id="prompt-popup-ok-button"]').click()
        cy.contains('No applications yet', { timeout: 60000 })
        cy.task('log', 'app is deleted...')
        cy.task('log', 'test has completed successfully')
    })
  }

  // ArgoCD behaves differently when logged in via keycloak. It doesn't refresh itself, and requires cy.reload and 
  // cy.wait in many places. Also, after you delete an app an error message complains the app is missing (which in 
  // this case is what we want). When using a local account you just get a screen that doesn't show the app anymore.
  // There may be some way to integrate argocd with keycloak so that it behaves properly like the test above expects. 
  // Meanwhile, this section should be considered a workaround for whatever issue that makes the app behave differently 
  // when logged in via SSO. It is not as good as the above test, and when the issue is resolved, this can be removed.
  if (Cypress.env('keycloak_test_enable')) {
    it('Having logged in with a keycloak SSO account, deploy and delete app in the ArgoCD UI', function() {
        cy.task('log', 'entering the keycloak SSO version of the app deployment test...')
        cy.contains('No applications yet', {timeout: 15000} )
        cy.get('button[qe-id="applications-list-button-new-app"]').click()
        cy.contains('Application Name').type('guestbook',{delay: 0})
        cy.get('input[qe-id="application-create-field-project"]').type('default',{delay: 0})
        cy.get(':nth-child(5) > :nth-child(1) > .select > .select__value').click()
        cy.contains('Automatic').click()
        cy.get('input[id="sync-option-CreateNamespace-undefined"]').last().click()
        cy.get('input[qe-id="application-create-field-path"]').type('guestbook',{delay: 0})
        cy.get('input[qe-id="application-create-field-repository-url"]').type('https://github.com/argoproj/argocd-example-apps.git',{delay: 0})
        cy.get('input[qe-id="application-create-field-cluster-url"]').type('https://kubernetes.default.svc',{delay: 0})
        cy.get('input[qeid="application-create-field-namespace"]').type('argocd',{delay: 0})
        cy.get('button[qe-id="applications-list-button-create"]').click()
        cy.wait(2000)
        app_page()
        cy.wait(10000)
        cy.reload()
        cy.get(':nth-child(2) > .application-status-panel__item-value > :nth-child(1)')
          .contains('Synced')
        cy.task('log', 'app is synced...')
        cy.wait(10000)
        cy.reload()
        cy.get(':nth-child(1) > .application-status-panel__item-value')
          .contains('Healthy')
        cy.task('log', 'app is healthy...')
        cy.get(':nth-child(6) > .fa').click()
        cy.contains('Please type').click()
        cy.get('input[qeid="name-field-delete-confirmation"]').type('guestbook')
        cy.get('button[qe-id="prompt-popup-ok-button"]').click()
        cy.wait(15000)
        cy.reload()
        cy.contains('guestbook').should('not.exist')
        cy.task('log', 'app is deleted...')
        cy.task('log', 'test has completed successfully')
    })
  }
})
