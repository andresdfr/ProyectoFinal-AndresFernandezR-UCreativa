class CartPage {
    elements = {
        firstProduct: () => cy.get('.inventory_list > div:nth-child(1)'),
        cartSpan: () => cy.get('.shopping_cart_badge'),
        prodCartBtn: () => cy.get('.inventory_details_desc_container button'),
        cartBtn: () => cy.get('.shopping_cart_link'),
        cartItemCount: () => cy.get('.cart_item'),
        cartBtnRemoveCheckout: () => cy.get('.cart_item button'),
        checkoutBtn: () => cy.get('[data-test="checkout"]'),
        firstNameCheckout: () => cy.get('[data-test="firstName"]'),
        lastNameCheckout: () => cy.get('[data-test="lastName"]'),
        zipCodeCheckout: () => cy.get('[data-test="postalCode"]'),
        continueBtnCheckout: () => cy.get('[data-test="continue"]'),
        finishBtncheckout: () => cy.get('[data-test="finish"]'),
        thanksMessageCheckout: () => cy.get('.complete-header'),
        backHomeBtnCheckout: () => cy.get('[data-test="back-to-products"]')
    }

    // Fill checkout information
    fillCheckoutInfo(){
        this.elements.firstNameCheckout().type('Andres')
        this.elements.lastNameCheckout().type('Fernandez')
        this.elements.zipCodeCheckout().type('11501')
    }

    // Click
    clickProductBtnInventory(){
        this.elements.firstProduct().find('button').click()
    }
    clickFirstProductName(){
        this.elements.firstProduct().find('.inventory_item_name').click()
    }
    clickProductBtnProduct(){
        this.elements.prodCartBtn().click()
    }
    clickCart(){
        this.elements.cartBtn().click()
    }
    clickRemoveCheckoutBtn(){
        this.elements.cartBtnRemoveCheckout().click()
    }
    clickCheckoutBtn(){
        this.elements.checkoutBtn().click()
    }
    clickContinueBtnCheckout(){
        this.elements.continueBtnCheckout().click()
    }
    clickFinishBtnCheckout(){
        this.elements.finishBtncheckout().click()
    }
    clickBackHomeBtnCheckout(){
        this.elements.backHomeBtnCheckout().click()
    }

    // Check
    // Cart Span
    checkSpanInCart_Visible(){
        this.elements.cartSpan().should('be.visible')
    }
    checkSpanInCart_Invisible(){
        this.elements.cartSpan().should('not.exist')
    }
    // Inventory
    checkAddToCartInventory_AddToCart(){
        this.elements.firstProduct().find('button').invoke('text').should('eq', 'Add to cart')
    }
    checkAddToCartInventory_Remove(){
        this.elements.firstProduct().find('button').invoke('text').should('eq', 'Remove')
    }
    // Product
    checkButtonProduct_AddToCart(){
        this.elements.prodCartBtn().invoke('text').should('eq', 'Add to cart')
    }
    checkButtonProduct_Remove(){
        this.elements.prodCartBtn().invoke('text').should('eq', 'Remove')
    }
    // Cart
    checkElementsInCartList(){
        let a = this.elements.cartItemCount().its('length')
        let b = this.elements.cartSpan().invoke('text').then(parseInt)
        a.should('eq', 1)
        b.should('eq', 1)
    }
    // Checkout
    checkThanksMessage(){
        this.elements.thanksMessageCheckout().should('be.visible')
    }

}

module.exports = new CartPage()
