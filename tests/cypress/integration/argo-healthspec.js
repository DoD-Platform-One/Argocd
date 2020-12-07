describe('Basic ArgocD', function() {
  it('Check ArgoCD is accessible', function() {
      cy.visit(Cypress.env('argocd_url'))
      cy.get(':nth-child(1) > div > .argo-label-placeholder').type(Cypress.env('argocd_user'))
      cy.get(':nth-child(2) > div > .argo-label-placeholder')
          .type(Cypress.env('argocd_password'))
      cy.get('.login__form-row > .argo-button').click()
      cy.title().should('eq', 'Argo CD - Applications')

  })
})