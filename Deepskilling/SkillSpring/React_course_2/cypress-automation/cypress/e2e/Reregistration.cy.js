// only for registration
// describe('Registration',() => {
//     it('passes',() => {
//         cy.visit('https://parabank.parasoft.com/parabank/index.htm')
//         cy.get("#loginPanel > p:nth-child(3) > a").click()
//         cy.get("input[id='customer.firstName']").type('Mike')
//         cy.get("input[id='customer.lastName']").type('Johnson')
//         cy.get("input[id='customer.address.street']").type('Test')
//         cy.get("input[id='customer.address.city']").type('Test')
//         cy.get("input[id='customer.address.state']").type('Test')
//         cy.get("input[id='customer.address.zipCode']").type('12345')
//         cy.get("input[id='customer.ssn']").type('12345')

//         cy.get("input[id='customer.username']").type('Testing1')
//         cy.get("input[id='customer.password']").type('Testing2')
//         cy.get("#repeatedPassword").type('Testing2')
//         cy.get("input[value='Register']").click()
//     })
// })

describe('POST Workflow - JSON',() => {
    it('Should successfully log in via API',() =>{
        const postData = {
            "id":78799781,
            "username":"testqauser21",
            "firstName":"test",
            "lastName":"qa",
            "email":"testa@test.com",
            "password":"test123",
            "phone":"54545454545",
            "userStatus":1
        }
        const headers = {
            'Content-Type':'application/json',
            'Authorization':'Bearer eyJhbGciOiJTUzI1NiIsInR5cCI6IkpXVCJ9'
        }
        cy.request({
            method:'POST',
            url:'https://petstore.swagger.io/v2/user',
            body:postData,
            headers:headers
        }).then((Response) => {
            expect(Response.status).to.eq(200)
        })

        const userName = 'testqauser21'
        const qsParams = {param1:'test1',param2:'test2'}
        cy.request('GET','https://petstore.swagger.io/v2/user/'+userName,{
            query:qsParams
        })
        .then((response) =>{
            expect(response.status).to.eq(200)
        })
    })

    cy.intercept('/api/data',{
        method:'GET',
    }).as('getData')
    .reply(200,{
        data:'Test Data'
    });

    //...perform your test logic...
    //...Replacing http reqqests to simulate different servers responses
    it('Should replace API response with mock data',() => {
        cy.intercept('GET','/api/users',{
                statusCode:200,
                body:[
                    {id:1,name:'Mock user 1'},
                    {id:2,name:'Mock User 2'}
                ]
            }).as('getUsers');
            cy.wait('@getUsers');
            
            //Validate
            cy.contains('Mock User 1').should('be.visible');
            cy.contains('Mock User 2').should('be.visible');

        })
    });

// npx cypress open       