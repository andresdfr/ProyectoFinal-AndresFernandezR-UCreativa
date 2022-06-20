class InventoryPage {

    elements = {
        productList: () => cy.get('.inventory_list .inventory_item'),
        baseElemProduct: (productName) => cy.get('.inventory_list .inventory_item').contains(productName).parent().parent().parent(),
        prodName: () => cy.get('.inventory_list .inventory_item .inventory_item_description .inventory_item_name'),
        sortButton: () => cy.get('[data-test="product_sort_container"]')
    }

    productsList = []
    productsListOrdered = []

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

    ProductNameList(){
        this.elements.prodName().each(($el) => {
            this.productsList.push($el.text())
            this.productsListOrdered.push($el.text())
        })
    }

    clickAtoZ_DropDown(){
        this.elements.sortButton().select('za')
    }

    sortAtoZ(){
        // this.ProductNameList(this.productsListOrdered)
        // this.productsListOrdered = this.productsListOrdered.sort() // This sorts alphabetically
        // cy.log(this.productsListOrdered.sort().reverse())
        // this.productsList === this.productsListOrdered ? console.log('iguales') : console.log('Diferentes')
        // expect(this.productsList).to.equal(this.productsListOrdered)

        console.log(this.productsList)
        console.log(this.productsListOrdered)
        // cy.debug()
        this.productsListOrdered.sort();
        console.log(this.productsListOrdered)
        
    }

    // sortZtoA_DropDown(){
    //     this.elements.sortButton().select('za')
    // }

    // checkAtoZSort(){
    //     this.ProductNameList()
    //     this.productsList.sort()
    //     this.productsList.reverse()
    // }

    // sortLowToHigh_DropDown(){
    //     this.elements.sortButton().select('lohi')
    // }

    // sortHighToLow_DropDown(){
    //     this.elements.sortButton().select('hilo')
    // }

}

module.exports = new InventoryPage()
