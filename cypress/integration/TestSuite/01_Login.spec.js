/// <reference types="Cypress" />
const loginPage = require("../../pages/login-page.spec.js")
import errorLoginTest from '../../fixtures/errorLoginTests.json'

describe('Login TC | Check all the login functionalities | Functional Testing | Poitive & Negative', () => {
    
    beforeEach(() => {
        cy.visit('/')
    })

    it('Check the correct loading of the site', () => {
        cy.url().should('include', 'https://www.saucedemo.com/')
        cy.get('#login-button').should('exist')
    });

    // Negative Login Tests
    errorLoginTest.forEach(fx => {
        it(`Negative Login TC - ${fx.TestCaseName}`, () => {
            // Make the login process with invalid elements
            if (fx.username !== "") {
                loginPage.elements.usernameTxt().type(fx.username)
                loginPage.elements.passwordTxt().type(fx.password)
            }
            // Click on the login Button
            loginPage.clickLoginBtn()

            // Check the "x" span
            loginPage.elements.errorUsernameSpan().should('be.visible')
            loginPage.elements.errorPasswordSpan().should('be.visible')

            // Check the error message
            loginPage.elements.errorMessage().should('contain.text', fx.errorMessage)
        });
    });

    it('Positive Login TC - Login Happy Path', () => {
        loginPage.loginStandardUser();
    });

});