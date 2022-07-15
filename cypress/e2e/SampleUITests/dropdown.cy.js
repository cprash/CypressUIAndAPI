describe('Drop down',()=>{
    it('Select dropdown test',()=>{
        cy.visit('https://www.orangehrm.com/orangehrm-30-day-trial/?')
        cy.get('#Form_submitForm_Country')
        .select('India')
        .should('have.value','India')
        

    })

    it('Non select dropdown test',()=>{
        cy.visit('https://www.google.com')
        cy.get("[name='q']").type('cypress').wait(2000)

        cy.get('.erkvQe').find('li span').contains('Cypress vine').click()
             

    })
})