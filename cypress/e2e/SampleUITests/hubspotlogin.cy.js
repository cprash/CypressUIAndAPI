describe('Hub Spot Login',()=>{
    it('Hub spot login test',()=>{
        cy.visit('https://app.hubspot.com/login',{failOnStatusCode: false})
        cy.get('#username').type('rahulsharma21291@gmail.com')
        cy.get('#password').type('Apple@789!!!')
        cy.get('#loginBtn').click()
    })
})