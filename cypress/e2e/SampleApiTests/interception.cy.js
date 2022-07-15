describe('Interception tests',()=>{

    it('Interception test No1 ',()=>{
        cy.visit('https://jsonplaceholder.typicode.com/')

        cy.intercept({
            path: '/users/1/posts'
        }).as('posts')
        cy.contains('Guide').click()
        cy.get("a[href='/users/1/posts']").click()
        cy.wait('@posts').then(inter=>{
            cy.log(JSON.stringify(inter))
            console.log(JSON.stringify(inter))
            expect(inter.response.body).to.have.length(10)
        })


    })
})