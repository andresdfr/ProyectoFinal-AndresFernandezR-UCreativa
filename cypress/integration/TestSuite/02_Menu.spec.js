/// <reference types="Cypress" />
const loginPage = require("../../pages/login-page.spec.js")
const menuPage = require("../../pages/menu-page.spec.js")
import menuOptions from '../../fixtures/menuOptions.json'

describe('Menu TC | Check Menu functtionalities & options | Functional Testing | Poitive', () => {
    
    beforeEach(() => {
        cy.visit('/')
        loginPage.loginStandardUser();
    })

    it('Check buttons functionality', () => {
        // Open menu button
        menuPage.openMenuClick()
        // Check the menu was opened
        menuPage.elements.closeMenuBtn().should('be.visible')
        // Close the menu
        menuPage.closeMenuClick()
        // Check the menu  was closed
        menuPage.elements.closeMenuBtn().should('not.be.visible')
    });

    it('Check the Menu options and order', () => {
        // Open menu button
        menuPage.openMenuClick()

        // Check the Menu options and order
        let count = 1;
        menuOptions.forEach(fx => {
            cy.checkListElementTextByPosition(`.bm-item-list > :nth-child(${count})`, fx)
            count ++;
        });

        // Close the menu
        menuPage.closeMenuClick()
        
    });

});