class InventoryPage {

    elements = {
        productList: () => cy.get('.inventory_list .inventory_item'),
        baseElemProduct: (productName) => cy.get('.inventory_list .inventory_item').contains(productName).parent().parent().parent(),
        prodName: () => cy.get('.inventory_list .inventory_item .inventory_item_description .inventory_item_name'),
        sortButton: () => cy.get('[data-test="product_sort_container"]'),
        prodPrice: () => cy.get('.inventory_list .inventory_item .inventory_item_description .pricebar > .inventory_item_price')
    }

    countProducts(totalItems){
        this.elements.productList().should(($el) => {
            expect($el).to.have.length(totalItems)
        })
    }

    checkProductName(productName){
        this.elements.baseElemProduct(productName).find('.inventory_item_name').invoke('text').should('eq', productName)
    }

    checkProductPrice(productName, productPrice){
        this.elements.baseElemProduct(productName).find('.inventory_item_price').invoke('text').should('eq', '$' + productPrice)
    }

    checkProductImage(productName, imgNameAltText){
        this.elements.baseElemProduct(productName).find('a img').should('have.attr', 'alt').then(alttext => {
            expect(alttext).to.be.equal(imgNameAltText)
        })
    }

    checkProductButton(productName, defaultBtn){
        this.elements.baseElemProduct(productName).find('.pricebar button').invoke('text').should('eq', defaultBtn)
    }

    productsList = []
    ProductNameList(){
        this.elements.prodName().each(($el) => {
            this.productsList.push($el.text())
        })
        cy.wrap(this.productsList).as("ListaProductos")
    }

    price01 = 0
    price02 = 0
    CheckProductPriceList(){
        this.elements.prodPrice().each(($el) => {
            this.price02 = $el.text().slice(1)
            expect(parseInt(this.price02)).to.be.at.least(parseInt(this.price01))
            this.price01 = $el.text().slice(1)
        })
    }

    clickAtoZ_DropDown(){
        this.elements.sortButton().select('az')
    }

    clickLowToHigh_DropDown(){
        this.elements.sortButton().select('lohi')
    }
}

module.exports = new InventoryPage()
