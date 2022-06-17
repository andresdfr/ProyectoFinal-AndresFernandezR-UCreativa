// Custom Commands
Cypress.Commands.add('checkListElementTextByPosition', (selector, text) => {
    cy.get(selector).invoke('text').should('eq', text)
})
