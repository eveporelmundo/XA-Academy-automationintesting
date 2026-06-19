Cypress.Commands.add('validateRoomImagesAreLoaded', () => {
cy.get('img.card-img-top')
    .should('have.length.at.least', 3)
    .each(($img) => {
    cy.wrap($img)
        .should('be.visible')
        .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0)
        })
    })
})