describe('Browser back and forward',()=>{
    it('browser back and fwd test',()=>{
        cy.visit('http://freshworks.com')
        cy.contains('Platform').click()
        .get('p.nav-title')
        .should('be.visible')
        .and('contain','Freshworks Neo')
        .click()

        cy.go('back')
        cy.wait(300)
        cy.go('forward')

        cy.go(-1)
        cy.wait(300)
        cy.go(+1)
       
        

    })
})