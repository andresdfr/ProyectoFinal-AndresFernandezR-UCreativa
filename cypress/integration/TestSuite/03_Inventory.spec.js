/// <reference types="Cypress" />
const loginPage = require("../../pages/login-page.spec.js")
const inventoryPage = require("../../pages/inventory-page.spec.js")
import productList from '../../fixtures/productList.json'

describe('Inventory TC | Check products and filters | Functional Testing | Poitive', () => {
    
    beforeEach(() => {
        cy.visit('/')
        loginPage.loginStandardUser();
    })

    it('Validar que la cantidad de productos sea la que se muestra en la pantalla', () => {
        // Get the total of elements in the fixure json file
        let productTotalCount = productList.length;
        // Check the total of elements with the products total displayed
        inventoryPage.countProducts(productTotalCount)
    });

    // Validate product elements with ficure list
    productList.forEach(fx => {
        it(`Validate Product - ${fx.productName}`, function () {
            inventoryPage.checkProductName(fx.productName)
            inventoryPage.checkProductPrice(fx.productName, fx.price)
            inventoryPage.checkProductImage(fx.productName, fx.imgNameAltText)
            inventoryPage.checkProductButton(fx.productName, fx.defaultBtn)
        })
    })

    it.only('Check order functionality', () => {
        // Check Name (A to Z)
        // Order the elements
        inventoryPage.clickAtoZ_DropDown()
        // Get the list after changing the dropdown
        inventoryPage.ProductNameList()
        // Sort the list from a to z
        // inventoryPage.sortAtoZ()
        cy.log(inventoryPage.productsList.sort())
        // cy.log(inventoryPage.productsListOrdered.sort((a, b) => a.localeCompare(b)))

        // expect(inventoryPage.productsList).to.equal(inventoryPage.productsListOrdered)

    });

});