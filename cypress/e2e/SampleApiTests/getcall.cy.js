describe('GET Rest API tests',()=>{

    let accessTok = 'b53de2d823e609e1b948dbe8c568cd3602973dc17634bfce4995dd54b0ed2995'
    it('Get REst API First test',()=>{
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                'authorization' : "Bearer " + accessTok
            }
        }).then((res)=>{
            expect(res.status).to.equal(200)
            
        })
    })

    it('Get REst API First test,get user by ID',()=>{
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users/3057',
            headers: {
                'authorization' : "Bearer " + accessTok
            }
        }).then((res)=>{
            expect(res.status).to.equal(200)
            expect(res.body.name).to.equal('Kama Bhat')
            
        })
    })
})