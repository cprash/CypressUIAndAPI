const dataJson = require('../../fixtures/createuser')

describe('Post Rest API tests',()=>{
    let accessTok = 'b53de2d823e609e1b948dbe8c568cd3602973dc17634bfce4995dd54b0ed2995'
    let randomStr = ""
    let testEmail = ""

    it('First Simple Post API test',()=>{
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
                "name": "Test Automation",
                "email": testEmail,
                "gender": "female",
                "status": "inactive"
            }
        }).then((res)=>{
            cy.log(JSON.stringify(res))
            expect(res.status).to.equal(201)
            expect(res.body).has.property('email',testEmail)
            expect(res.body).has.property('name','Test Automation')
            expect(res.body).has.property('gender','female')
            expect(res.body).has.property('status','inactive')
        })
    })

    it('Post API test using imported fixture',()=>{
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
        })
    })

    it('Post API test using cy.fixture',()=>{
        var pattern= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        for(var i=0;i<10;i++)
        randomStr+=pattern.charAt(Math.floor(Math.random()*pattern.length))
        testEmail=randomStr+'@gmail.com'
        cy.fixture('createuser').then((payload)=>{
            cy.request({
                method: 'POST',
                url: 'https://gorest.co.in/public/v2/users',
                headers : {
                    'Authorization': 'Bearer ' + accessTok
                },
                body: {
                    "name": payload.name,
                    "email": testEmail,
                    "gender": payload.gender,
                    "status": payload.status
                }
            }).then((res)=>{
                cy.log(JSON.stringify(res))
                expect(res.status).to.equal(201)
                expect(res.body).has.property('email',testEmail)
                expect(res.body).has.property('name', payload.name)
                expect(res.body).has.property('gender',payload.gender)
                expect(res.body).has.property('status',payload.status)
            })
        })
        
    })


})