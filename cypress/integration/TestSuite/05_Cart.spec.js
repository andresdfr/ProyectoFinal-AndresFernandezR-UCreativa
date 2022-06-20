/// <reference types="Cypress" />
const loginPage = require("../../pages/login-page.spec.js")
const cartPage = require("../../pages/cart-page.spec.js");
const { checkElementsInCartList } = require("../../pages/cart-page.spec.js");

describe('Cart TC | Check buttons and cart functionality | Functional Testing | Poitive', () => {
    
    beforeEach(() => {
        cy.visit('/')
        loginPage.loginStandardUser();
    })

    it('Validate Add & Remove from inventory', () => {
        // Click on the Add to Cart button of the first element
        cartPage.clickProductBtnInventory()

        // Check the Button and the cart changes
        cartPage.checkSpanInCart_Visible()
        cartPage.checkAddToCartInventory_Remove()

        // Click on the Remove button of the first element
        cartPage.clickProductBtnInventory()

        // Check the Button and the cart changes
        cartPage.checkSpanInCart_Invisible()
        cartPage.checkAddToCartInventory_AddToCart()
    });

    it('Validate Add & Remove from product', () => {
        // Enter the first product
        cartPage.clickFirstProductName()

        // Click on the Add to Cart button
        cartPage.clickProductBtnProduct()

        // Check the Button and the cart changes
        cartPage.checkSpanInCart_Visible()
        cartPage.checkButtonProduct_Remove()

        // Click on the Remove button
        cartPage.clickProductBtnProduct()

        // Check the Button and the cart changes
        cartPage.checkSpanInCart_Invisible()
        cartPage.checkButtonProduct_AddToCart()

    });

    it('Validate cart functionality', () => {
        // Click on the Add to Cart button of the first element
        cartPage.clickProductBtnInventory()

        // Click on cart Btn
        cartPage.clickCart()

        // Validate element quantity and cart quantity
        cartPage.checkElementsInCartList()

        // Remove from cart
        cartPage.clickRemoveCheckoutBtn()

        // Check there's no elements to check out
        cartPage.checkSpanInCart_Invisible()
    });

    it('Make the checkout process', () => {
        // Click on the Add to Cart button of the first element
        cartPage.clickProductBtnInventory()

        // Click on cart Btn
        cartPage.clickCart()

        // Click the checkout btn
        cartPage.clickCheckoutBtn()

        // Fill information and click next
        cartPage.fillCheckoutInfo()
        cartPage.clickContinueBtnCheckout()

        // Click the finish button
        cartPage.clickFinishBtnCheckout()

        // Check thanks message
        cartPage.checkThanksMessage()

        // Go back home click
        cartPage.clickBackHomeBtnCheckout()
    });

});