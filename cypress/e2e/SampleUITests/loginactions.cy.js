describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://classic.crmpro.com/')
    cy.title().should('have.text','CRMPRO  - CRM software for customer relationship management, sales, and support.')
    cy.get('input[name="username"]').type('frusteee')
    cy.get('input[name="password"]').type('Apple@789!!!')
    cy.get('input[value="Login"]').click
    cy.contains('Reports')
    cy.contains('Reports').click
  })
})