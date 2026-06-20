/// <reference types="cypress" />

// =============================================================================
// myTestRestfulBooker.cy.js
// =============================================================================
// Test suite for: Shady Meadows B&B — https://automationintesting.online/
//
// DATA STRATEGY
// Test data lives in fixture files under cypress/fixtures/:
// - booking.json
// - contact.json
// - admin.json
// - rooms.json
// =============================================================================

// Avoid current application exception
Cypress.on('uncaught:exception', () => {
  return false
})

// =============================================================================
// SECTION 1 — HOME PAGE
// =============================================================================

describe('1 — Home Page', () => {
  beforeEach(() => {
    cy.visit('https://automationintesting.online/')
  })

  it('TC-1.0 — should load the home page with main content visible', () => {
    cy.contains('Welcome to Shady Meadows B&B').should('be.visible')
    cy.get('nav').should('exist')
    cy.get('#contact').should('exist')
  })
})

// =============================================================================
// SECTION 2 — BOOKING FLOW
// =============================================================================

describe('2 — Booking', () => {
  beforeEach(() => {
    cy.visit('https://automationintesting.online/')
  })

  it('TC-2.0 — should display available rooms on the home page', () => {
    cy.intercept('GET', '**/api/room').as('getRooms')

    cy.reload()
    cy.wait('@getRooms')

    cy.get('a[href*="/reservation/"]', { timeout: 10000 })
      .should('have.length.at.least', 1)

    cy.contains('a.btn.btn-primary', 'Book now')
      .should('be.visible')
  })

  it('TC-3.0 — should open the booking form when clicking Book now for a room', () => {
    cy.intercept('GET', '**/api/room').as('getRooms')

    cy.reload()
    cy.wait('@getRooms')

    cy.contains('a.btn.btn-primary', 'Book now')
      .first()
      .click()

    cy.url().should('include', '/reservation/')

    cy.contains('Reserve Now', { matchCase: false })
      .should('be.visible')
  })

it('TC-6.0 — should display validation errors when submitting an empty booking form', () => {
  cy.contains('a.btn.btn-primary', 'Book now', { timeout: 10000 })
    .first()
    .click()

  cy.url().should('include', '/reservation/')

  cy.selectBookingDates()

  
  cy.get('.booking-card')
    .contains('button', 'Reserve Now')
    .should('be.visible')
    .click()

  
  cy.get('input[placeholder="Firstname"]').should('be.visible')
  cy.get('input[placeholder="Lastname"]').should('be.visible')
  cy.get('input[placeholder="Email"]').should('be.visible')
  cy.get('input[placeholder="Phone"]').should('be.visible')

  
  cy.get('.booking-card')
    .contains('button', 'Reserve Now')
    .should('be.visible')
    .click()

  cy.get('.alert.alert-danger', { timeout: 10000 })
    .should('be.visible')
    .within(() => {
      cy.contains('Firstname should not be blank').should('be.visible')
      cy.contains('Lastname should not be blank').should('be.visible')
      cy.contains('must not be empty').should('be.visible')
    })

  cy.contains('Booking Confirmed').should('not.exist')
})

it('TC-7.0 — should show validation error for an invalid email address', () => {
  cy.fixture('booking').then((bookingData) => {
    const guest = bookingData.invalidEmail

    cy.contains('a.btn.btn-primary', 'Book now', { timeout: 10000 })
      .first()
      .click()

    cy.url().should('include', '/reservation/')

    cy.selectBookingDates()

    cy.get('.booking-card')
      .contains('button', 'Reserve Now')
      .should('be.visible')
      .click()

    cy.get('input[placeholder="Firstname"]').should('be.visible')
    cy.get('input[placeholder="Lastname"]').should('be.visible')
    cy.get('input[placeholder="Email"]').should('be.visible')
    cy.get('input[placeholder="Phone"]').should('be.visible')

    cy.get('input[placeholder="Firstname"]').type(guest.firstName)
    cy.get('input[placeholder="Lastname"]').type(guest.lastName)
    cy.get('input[placeholder="Email"]').type(guest.email)
    cy.get('input[placeholder="Phone"]').type(guest.phone)

    cy.get('.booking-card')
      .contains('button', 'Reserve Now')
      .should('be.visible')
      .click()

    cy.get('.alert.alert-danger', { timeout: 10000 })
      .should('be.visible')
      .within(() => {
        cy.contains('must be a well-formed email address').should('be.visible')
      })

    cy.contains('Booking Confirmed').should('not.exist')
  })
})

  it('TC-9.0 — should display all expected validation messages for invalid inputs', () => {
    cy.fixture('booking').then((bookingData) => {
    const guest = bookingData.invalidImputs
    
    cy.contains('a.btn.btn-primary', 'Book now', { timeout: 10000 })
      .first()
      .click()

    cy.url().should('include', '/reservation/')

    cy.contains('Reserve Now', { matchCase: false })
      .click()

    cy.get('input[placeholder="Firstname"]').type(guest.firstName)
    cy.get('input[placeholder="Lastname"]').type(guest.lastName)
    cy.get('input[placeholder="Email"]').type(guest.email)
    cy.get('input[placeholder="Phone"]').type(guest.phone)

    cy.get('.booking-card')
      .contains('button', 'Reserve Now')
      .should('be.visible')
      .click()

    cy.get('.alert-danger').within(() => {
      cy.contains('size must be between 11 and 21').should('be.visible')
      cy.contains('size must be between 3 and 30').should('be.visible')
      cy.contains('size must be between 3 and 18').should('be.visible')
      cy.contains('must be a well-formed email address').should('be.visible')
    })
  })
})
})

// =============================================================================
// SECTION 3 — CONTACT FORM
// =============================================================================

describe('3 — Contact Form', () => {
  beforeEach(() => {
    cy.visit('https://automationintesting.online/#contact')
  })

describe('3 — Contact Form', () => {
  beforeEach(() => {
    cy.visit('https://automationintesting.online/#contact')
  })

  it('TC-18.0 — should submit the contact form and show a confirmation message', () => {
    cy.fixture('contact').then((contactData) => {
      const data = contactData.validContact

      cy.get('#contact').scrollIntoView()

      cy.fillContactForm(data)

      cy.contains('button.btn.btn-primary', 'Submit', { timeout: 10000 })
        .scrollIntoView()
        .should('be.visible')
        .click()

      cy.contains(data.subject, { timeout: 8000 }).should('be.visible')
      cy.contains('Thanks for getting in touch').should('be.visible')
    })
  })
  })

  it('TC-17.0 — should show validation errors when submitting an empty contact form', () => {
        cy.contains('button.btn.btn-primary', 'Submit', { timeout: 10000 })
        .scrollIntoView()
        .should('be.visible')
        .click()

    cy.get('.alert-danger').should('be.visible')
    cy.contains('Message must be between 20 and 2000 characters.').should('be.visible')
    cy.contains('Subject must be between 5 and 100 characters.').should('be.visible')
    cy.contains('Message may not be blank').should('be.visible')
    cy.contains('Subject may not be blank').should('be.visible')
    cy.contains('Phone may not be blank').should('be.visible')
    cy.contains('Name may not be blank').should('be.visible')
    cy.contains('Message must be between 20 and 2000 characters.').should('be.visible')
    cy.contains('Email may not be blank').should('be.visible')
  })
})

// =============================================================================
// SECTION 4 — ADMIN PANEL
// =============================================================================

describe('4 — Admin Panel', () => {
  it('TC-19.0 — should log in to the admin panel with valid credentials', () => {
    cy.fixture('admin').then((adminData) => {
      cy.adminLogin(adminData.validAdmin)

      cy.url().should('include', '/admin')
      cy.contains('Rooms', { timeout: 8000 }).should('be.visible')
    })
  })

  it('TC-20.0 — should reject invalid admin credentials', () => {
    cy.fixture('admin').then((adminData) => {
      cy.adminLogin(adminData.invalidAdmin)

      cy.contains('Invalid credentials').should('be.visible')
      cy.url().should('include', '/admin')
    })
  })

  it('TC-21.0 — should display a completed booking record in admin', () => {
    cy.fixture('booking').then((bookingData) => {
      cy.fixture('admin').then((adminData) => {
        const guest = bookingData.anotherGuest
        const guestLastName = guest.lastname || guest.lastName

        cy.visit('https://automationintesting.online/')

        cy.contains('a.btn.btn-primary', 'Book now', { timeout: 10000 })
          .first()
          .click()

        cy.url().should('include', '/reservation/')

        cy.selectBookingDates(guest.checkin, guest.checkout)

        cy.contains('Reserve Now', { matchCase: false })
          .click()

        cy.fillBookingForm(guest)

        cy.contains('Reserve Now', { matchCase: false })
          .last()
          .click()

        cy.contains('Booking Confirmed', { timeout: 10000 })
          .should('be.visible')

        cy.adminLogin(adminData.validAdmin)

        cy.contains('Report').click()

        cy.contains(guestLastName, { timeout: 8000 })
          .should('be.visible')
      })
    })
  })

  it('TC-22.0 — should display a submitted contact message in admin inbox', () => {
    cy.fixture('contact').then((contactData) => {
      cy.fixture('admin').then((adminData) => {
        const data = contactData.validContact

        cy.visit('https://automationintesting.online/#contact')

        cy.fillContactForm(data)

        cy.contains('button.btn.btn-primary', 'Submit', { timeout: 10000 })
        .scrollIntoView()
        .should('be.visible')
        .click()

        cy.contains('Thanks for getting in touch', { timeout: 8000 })
          .should('be.visible')

        cy.adminLogin(adminData.validAdmin)

        cy.contains('Messages').click()

        cy.contains(data.subject, { timeout: 8000 })
          .should('be.visible')
      })
    })
  })
})