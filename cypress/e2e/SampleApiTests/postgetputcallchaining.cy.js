const dataJson = require('../../fixtures/createuser')

describe('Post Rest API tests',()=>{
    let accessTok = 'b53de2d823e609e1b948dbe8c568cd3602973dc17634bfce4995dd54b0ed2995'
    let randomStr = ""
    let testEmail = ""

    
    it('Post API test using imported fixture chained with get',()=>{
        var pattern= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        for(var i=0;i<10;i++)
        randomStr+=pattern.charAt(Math.floor(Math.random()*pattern.length))
        testEmail=randomStr+'@gmail.com'
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers : {
                'Authorization': 'Bearer ' + accessTok
            },
            body: {
                "name": dataJson.name,
                "email": testEmail,
                "gender": dataJson.gender,
                "status": dataJson.status
            }
        }).then((res)=>{
            cy.log(JSON.stringify(res))
            expect(res.status).to.equal(201)
            expect(res.body).has.property('email',testEmail)
            expect(res.body).has.property('name', dataJson.name)
            expect(res.body).has.property('gender',dataJson.gender)
            expect(res.body).has.property('status',dataJson.status)
        }).then((res)=>{
            const userId=res.body.id
            cy.log('User id is : '+userId)

            cy.request({
                method: 'GET',
                url: 'https://gorest.co.in/public/v2/users/'+userId,
                headers: {
                    'authorization' : "Bearer " + accessTok
                }
            }).then((res)=>{
                cy.log(JSON.stringify(res))
                expect(res.status).to.equal(200)
            })

            cy.request({
                method: 'PUT',
                url: 'https://gorest.co.in/public/v2/users/'+userId,
                headers : {
                    'Authorization': 'Bearer ' + accessTok
                },
                body: {
                    "name": 'new'+dataJson.name,
                    "email": 'new'+testEmail,
                    "gender": dataJson.gender,
                    "status": dataJson.status
                }
            }).then((res)=>{
                cy.log(JSON.stringify(res))
                expect(res.status).to.equal(200)
                expect(res.body).has.property('email','new'+testEmail)
                expect(res.body).has.property('name', 'new'+dataJson.name)
            })

            cy.request({
                method: 'GET',
                url: 'https://gorest.co.in/public/v2/users/'+userId,
                headers: {
                    'authorization' : "Bearer " + accessTok
                }
            }).then((res)=>{
                cy.log(JSON.stringify(res))
                expect(res.status).to.equal(200)
                expect(res.body).has.property('email','new'+testEmail)
                expect(res.body).has.property('name', 'new'+dataJson.name)
            })
            
        })
    })


})