describe('Visiting main site', () => {
  beforeEach('visit main page', () => {
    cy.session('mainSite', () => {
      cy.visit('/')
    })

    context('Main page is visible', () => {
      it.only('accessing main page', () => {
        cy.visit('/')
      })
    })
  })
})