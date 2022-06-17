class MenuPage {

    elements = {
        menuBtn: () => cy.get('#react-burger-menu-btn'),
        closeMenuBtn: () => cy.get('#react-burger-cross-btn'),
        menuItem: (position) => cy.get(`.bm-item-list > :nth-child(${position})`)
    }

    openMenuClick(){
        this.elements.menuBtn().click()
    }

    closeMenuClick(){
        this.elements.closeMenuBtn().click()
    }
}

module.exports = new MenuPage()