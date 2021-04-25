/// <reference types="cypress" />
// import {username,password} from '../constant'

describe('should order court successfully', ()=>{

    beforeEach(() => {
        cy.viewport('iphone-xr')
        cy.visit('')
      })

    it('Should login sipu-basketball successfully',()=>{
        cy.visit('')
        cy.get('#normal_login_username').type(Cypress.env('username'))
        cy.get('#normal_login_password').type(Cypress.env('password'))
        cy.get('button[type="submit"]').click()
        cy.contains('Login Success').should('be.visible')
    })

})