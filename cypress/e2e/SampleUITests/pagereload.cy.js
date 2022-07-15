describe('Browser page reload or refreshh',()=>{
    it('browser reload or refressh test',()=>{
        cy.visit('http://freshworks.com')
        cy.contains('Platform').click()
        .get('p.nav-title')
        .should('be.visible')
        .and('contain','Freshworks Neo')
        .click()

        cy.reload()
        

    })
})