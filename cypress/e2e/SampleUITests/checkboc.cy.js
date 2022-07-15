describe('Checkbox ',()=>{
    it('Checkbox test',()=>{
        cy.visit('http://automationpractice.com/index.php')
        
        cy.get('.sf-with-ul').first().click()

        cy.get('.checkbox').check().parent().should('have.class','checked')

        cy.get('.checkbox').uncheck().parent().should('not.have.class','checked')
    })

})