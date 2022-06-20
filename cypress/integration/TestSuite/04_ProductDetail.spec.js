/// <reference types="Cypress" />
const loginPage = require("../../pages/login-page.spec.js")
const productPage = require("../../pages/product-page.spec.js")
import productList from '../../fixtures/productList.json'

describe('Products TC | Check each product and functionality | Functional Testing | Poitive', () => {
    
    beforeEach(() => {
        cy.visit('/')
        loginPage.loginStandardUser();
    })

    // Validate product elements with fixture list
    productList.forEach(fx => {
        it(`Validate Product - ${fx.productName}`, function () {
            // Click on the product
            productPage.clickProductName(fx.productName)

            // Check Name, Price and Image
            productPage.checkProductName(fx.productName)
            productPage.checkProductPrice(fx.price)
            productPage.checkProductImage(fx.imgNameAltText)

            // Click the back to products Btn
            productPage.clickBackToProductsBtn()
        })
    })

});