// blog_app.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('Blog app',function(){
    beforeEach(function(){
        cy.request('POST', 'http://localhost:3001/api/testing/reset')
        const testuser = {
            username:"tester",
            password:"testerpassword",
            name:'tester'
        }
        cy.request('POST','http://localhost:3001/api/user',testuser)
        cy.visit('http://localhost:3000')
    })
    it('Login page is shown',function(){
        cy.contains('Login')
    })
    it('login with correct user',function(){
        cy.get('#username').type('tester')
        cy.get('#password').type('testerpassword')
        cy.get('#login-btn').click()
        cy.contains('tester is Logged in')
    })
})