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
    it('loger can post a blog',function(){
        cy.get('#username').type('tester')
        cy.get('#password').type('testerpassword')
        cy.get('#login-btn').click()
        cy.get('#addblog').click()
        cy.get('#title').type('testing blog')
        cy.get('#author').type('tester author')
        cy.get('#url').type('hello')
        cy.get('#create').click()
        cy.contains('New Blog testing blog by tester author is added succesfully')
        cy.get('#logout').click()
    })
   
})
describe('for like',function(){
    beforeEach(function(){
        cy.request('POST', 'http://localhost:3001/api/testing/reset')
        const testuser = {
            username:"tester",
            password:"testerpassword",
            name:'tester'
        }
        cy.request('POST','http://localhost:3001/api/user',testuser)
        cy.visit('http://localhost:3000')
        cy.get('#username').type('tester')
        cy.get('#password').type('testerpassword')
        cy.get('#login-btn').click()
        cy.get('#addblog').click()
        cy.get('#title').type('testing blog')
        cy.get('#author').type('tester author')
        cy.get('#url').type('hello')
        cy.get('#create').click()
    })
    it('you can like',function(){
        cy.get('#sd').click()
        cy.get('#like').click()
        cy.contains('likes : 1')
    })
})