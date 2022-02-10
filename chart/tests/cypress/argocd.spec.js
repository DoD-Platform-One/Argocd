describe('ArgoCD test', function() {
  // the app throws an "Unauthorized" exception when you first visit without a token that will stop the test without this
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
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
    cy.get('a[qe-id="applications-tiles-button-sync"]', {timeout: 30000})
    .should('be.visible')
    .click()
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
          cy.task('log', 'hit max retries for the app sync button...')
        }
      }
    })
  }
  // check to see if the synchronize button is visible and begin a sync, if not retry synch process
  const appsyncbuttonretries = 5
  let i = 0
  function appsyncbutton () {
    i++
    cy.task('log', 'synchronize() called...')
    cy.get('body').then($body => {
      cy.get('.sliding-panel--is-middle > .sliding-panel__wrapper > .sliding-panel__header > div > .argo-button--base', {timeout: 1000}).then($synchronize => {
      if ($synchronize.is(':visible')){
        cy.task('log', 'clicking the synchronize button...')
        cy.get('.sliding-panel--is-middle > .sliding-panel__wrapper > .sliding-panel__header > div > .argo-button--base', {timeout: 1000}).last().click()
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
          cy.task('log', 'hit max retries for the app sync button...')
        }
      }
    })
   })
  }
  it('Log in, deploy and delete app in the ArgoCD UI', function() {
      cy.task('log', 'starting test...')
      cy.visit(Cypress.env('url'))
      cy.contains('Username').type(Cypress.env('user'),{delay: 0})
      cy.get('input[type="password"]').type(Cypress.env('password'),{delay: 0})
      cy.get('button[type="submit"]').click()
      cy.task('log', 'logged in...')
      cy.contains('No applications yet', {timeout: 15000} )
      cy.get('button[qe-id="applications-list-button-new-app"]').click()
      cy.contains('Application Name').type('guestbook',{delay: 0})
      cy.get('input[qe-id="application-create-field-project"]').type('default',{delay: 0})
      cy.get('input[id="sync-option-CreateNamespace"]').last().click()
      cy.get('input[qe-id="application-create-field-path"]').type('guestbook',{delay: 0})
      cy.get('input[qe-id="application-create-field-repository-url"]').type('https://github.com/argoproj/argocd-example-apps.git',{delay: 0})
      cy.get('input[qe-id="application-create-field-cluster-url"]').type('https://kubernetes.default.svc',{delay: 0})
      cy.get('input[qeid="application-create-field-namespace"]').type('argocd',{delay: 0})
      cy.get('button[qe-id="applications-list-button-create"]').click()
      cy.task('log', 'pressed create on the test app...')
      appsyncpane ()
      appsyncbutton()
      cy.get('.applications-list__title', {timeout: 15000})
        .should('be.visible')
        .contains('guestbook')
        .click()
      cy.task('log', 'entering test app stats page...')
      cy.get(':nth-child(2) > .application-status-panel__item-value > :nth-child(1)')
        .contains('Synced', { timeout: 180000 })
      cy.task('log', 'app is synced...')

      //// remove the filters and screenshot to see the state of the test app resources, uncomment to debug
      //cy.get('.application-resource-tree__node-content-wrap-overflow > .application-resource-tree__node-title')
      //  .click()
      //cy.wait(2000)
      //cy.screenshot()

      //// look at the test app's events and screenshot an arbitrary number of times with an arbitrary interval
      //// uncomment to debug
      // eventscreenshot()

      cy.get(':nth-child(1) > .application-status-panel__item-value')
        .contains('Healthy', { timeout: 180000 })
      cy.task('log', 'app is healthy...')
      cy.get(':nth-child(6) > .fa').click()
      cy.contains('Please type').click()
      cy.get('input[qeid="name-field-delete-confirmation"]').type('guestbook')
      cy.get('button[qe-id="prompt-popup-ok-button"]').click()
      cy.contains('No applications yet', { timeout: 60000 })
      cy.task('log', 'app is deleted...')
  })
})
