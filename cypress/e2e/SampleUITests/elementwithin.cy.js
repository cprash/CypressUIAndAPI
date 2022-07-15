describe('Elemebnt within Concept',()=>{
    it('element within test',()=>{
        cy.visit('https://www.amazon.in/')
        cy.get('div.nav-search-field ').within(()=>{
            cy.get('#twotabsearchtextbox').type('Apple Macbook')
        })
       
        

    })
})