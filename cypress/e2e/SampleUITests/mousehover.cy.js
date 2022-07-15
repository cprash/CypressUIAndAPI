describe('Mouse hover',()=>{
    it.skip('Mouse hover test',()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.contains('Dresses').trigger('mouseover',{force: true})
        .wait(2000)
        .get("li.sfHoverForce a[title='Casual Dresses']")
        .should('be.visible')
        .click()
    })

    it('Mouse hover test',()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.ajax_add_to_cart_button').first().click()

        cy.wait(3000)
        cy.get('.cross').first().click()

        cy.get('div.cart_block').should('be.hidden').invoke('show')
        cy.wait(3000)
        cy.get('#button_order_cart').click()

        cy.url().should('include','controller=order')

    })

})