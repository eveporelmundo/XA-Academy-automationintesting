// <reference types="cypress" />

/// <reference types="cypress" />

// Avoid current application exception
Cypress.on('uncaught:exception', () => {
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
  cy.fixture('rooms').then((roomsData) => {
    cy.contains('nav a', roomsData.bookingSection.headerLink).click()

    cy.url().should('include', roomsData.bookingSection.urlAnchor)

    cy.contains(roomsData.bookingSection.sectionTitle, { timeout: 10000 })
      .should('be.visible')

    roomsData.expectedRooms.forEach((room) => {
      cy.contains(room.name).should('be.visible')
    })

    cy.validateRoomImagesAreLoaded()

    cy.contains(roomsData.bookingSection.buttonText).should('be.visible')
  })
})
})