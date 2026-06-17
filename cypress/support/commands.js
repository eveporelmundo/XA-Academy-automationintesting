Cypress.Commands.add('validateImageIsLoaded', (imageAlt) => {
    cy.get(`img[alt="${imageAlt}"]`)
    .should('be.visible')
    .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0)
    })
})