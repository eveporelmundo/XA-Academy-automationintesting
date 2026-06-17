// <reference types="cypress" />

import './commands.js'

///Avoide current exception///
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})



describe('Automation in Testing - Shady Meadows', () => {

  beforeEach(() => {
  cy.visit('https://automationintesting.online/')
})

  it('TC-001 - Should display the home page', () => {

    cy.url().should('include', 'automationintesting.online')
    cy.get('body').should('be.visible')
    cy.contains('Shady Meadows').should('be.visible')
  })


it('TC-002 - Should display the booking section and available rooms correctly', () => {

  // Navigate to the booking section from the header
  cy.contains('nav a', 'Booking').click()

  // Verify internal navigation to the booking section
  cy.url().should('include', '#booking')

  // Verify the booking / rooms section is visible
  cy.contains('Our Rooms', { timeout: 10000 }).should('be.visible')

  // Verify available room names are displayed
  cy.contains('Single').should('be.visible')
  cy.contains('Double').should('be.visible')
  cy.contains('Suite').should('be.visible')

  // Verify room images are visible and loaded correctly
  cy.get('img.card-img-top').should('have.length.at.least', 3)

  cy.get('img.card-img-top').each(($img) => {
    cy.wrap($img)
      .should('be.visible')
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0)
      })
  })

  // Verify booking buttons are available without clicking them
  cy.contains('Book now').should('be.visible')
})

})