// Custom Commands
Cypress.Commands.add('checkListElementTextByPosition', (selector, text) => {
    cy.get(selector).invoke('text').should('eq', text)
})

// Get the length of a list of elements and save it into a specific variable
// Cypress.Commands.add('getTotalProducts', (selector, variable) => {
//     variable = cy.get(selector).its('length')
// })
