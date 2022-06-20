class ProductPage {
    elements = {
        prodName: (productName) => cy.get('.inventory_list .inventory_item .inventory_item_description .inventory_item_name').contains(productName),
        prodNameDetail: () => cy.get('.inventory_details_name'),
        prodPriceDetail: () => cy.get('.inventory_details_price'),
        prodImgDetail: () => cy.get('.inventory_details_img'),
        backToProductsBtn: () => cy.get('[data-test="back-to-products"]')
    }

    // Click
    clickProductName(productName) {
        this.elements.prodName(productName).click()
    }

    clickBackToProductsBtn() {
        this.elements.backToProductsBtn().click()
    }

    // Check
    checkProductName(productName){
        this.elements.prodNameDetail().invoke('text').should('eq', productName)
    }

    checkProductPrice(productPrice){
        this.elements.prodPriceDetail().invoke('text').should('eq', '$' + productPrice)
    }

    checkProductImage(imgNameAltText){
        this.elements.prodImgDetail().should('have.attr', 'alt').then(alttext => {
            expect(alttext).to.be.equal(imgNameAltText)
        })
    }
}

module.exports = new ProductPage()
