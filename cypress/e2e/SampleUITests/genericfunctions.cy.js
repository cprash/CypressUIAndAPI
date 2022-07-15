describe('Login feature',()=>{
    
    beforeEach(()=>{
        cy.visit('http://automationpractice.com/',{failOnStatusCode: false})
    })

    it('should login',()=>{        
        cy.login('rahulsharma21291@gmail.com','Apple@789!')
        cy.url().should('include','controller=my-account')
    })


})