describe('Elemebnt get concept',()=>{
    it('element get test',()=>{
        cy.visit('http://freshworks.com')
        cy.contains('Platform').click()
        .get('p.nav-title')
        .should('be.visible')
        .and('contain','Freshworks Neo')
        .click()

        cy.get('ul.footer-nav li').should('have.length',43)
        cy.get('ul.footer-nav li').find("a[href*='footer']").should('have.length',25)
        

    })
})