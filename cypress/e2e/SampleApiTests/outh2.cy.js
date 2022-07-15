describe('OAuth2.0 Test',()=>{

    let accessToken = ''
    let userID = ''

    it('get the access token,user id and feed the chicken',()=>{
        cy.request({
            method : 'POST',
            url : 'http://coop.apps.symfonycasts.com/token',
            form: true,
            body:{
                "client_id": "CypressAutoTest",
                "client_secret": "52b99b9dc51f8eec5dc5a9517b0de6fd",
                "grant_type": "client_credentials"
            }
        }).then(res=>{
            cy.log(JSON.stringify(res))
            cy.log(res.body.access_token)
            accessToken= res.body.access_token

            cy.request({
                method: 'GET',
                url: 'http://coop.apps.symfonycasts.com/api/me',
                headers:{
                    'Authorization': 'Bearer '+accessToken
                }
            }).then(res=>{
                userID=res.body.id
                cy.log('User id :'+userID)
                cy.request({
                    method:'POST',
                    url: 'http://coop.apps.symfonycasts.com/api/'+userID+'/chickens-feed',
                    headers:{
                        'Authorization': 'Bearer '+accessToken
                    }
                }).then(res=>{
                    cy.log(JSON.stringify(res))
                    expect(res.status).to.equal(200)

                })
            })

        })
    })

})