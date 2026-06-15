# Testing Project - Automation in Testing

## Project Description

This project focuses on the analysis, design, execution, documentation, and automation of tests for the following web application:

https://automationintesting.online/

The application simulates a hotel booking platform where users can check available rooms, make reservations, send contact messages, and access an administration panel.

The main objective of this project is to apply functional testing, exploratory testing, form validation testing, and test automation practices in order to identify critical user flows, detect defects, document evidence, and improve the overall quality of the application.

---

## Participant

* Evelyn Grau

---

## General Objective

Evaluate the correct behavior of the Automation in Testing web application by verifying its main user flows, identifying functional, visual, and validation issues, and documenting the results through manual and automated testing practices.

---

## Specific Objectives

* Analyze the main functionality of the web application.
* Identify critical business flows.
* Design manual test cases.
* Execute functional tests through the user interface.
* Validate forms using valid and invalid data.
* Verify the behavior of the admin login.
* Register bugs with clear evidence.
* Automate selected test scenarios using Cypress.
* Automate bug reporting workflows using n8n.
* Integrate bug tracking with Trello.
* Automate bug documentation in Excel / Google Sheets.
* Document the results of the testing process.

---

## Scope of Testing

The testing process focuses on the following modules:

### Home

* Initial page loading.
* Display of main texts, images, and sections.
* General navigation.
* Basic responsive behavior.

### Rooms

* Display of available rooms.
* Validation of room information, including price, description, and features.
* Room selection for booking.

### Booking

* Date selection.
* User data input.
* Mandatory field validation.
* Booking confirmation.
* Validation of invalid dates and incorrect data.

### Contact

* Contact form submission with valid data.
* Empty field validation.
* Invalid email validation.
* Validation of short or invalid messages.

### Admin

* Login with valid credentials.
* Login with invalid credentials.
* Access to the admin panel.
* Visualization of bookings, rooms, and messages.

---

## Out of Scope

The following items are not included in this first stage:

* Performance testing.
* Advanced security testing.
* Complete automation of all test cases.
* Database testing.
* Full cross-browser compatibility testing.
* Load testing.
* Stress testing.

---

## Testing Types Applied

* Exploratory testing.
* Functional testing.
* Basic regression testing.
* Form validation testing.
* UI testing.
* Smoke testing.
* Negative testing.
* Automated end-to-end testing with Cypress.
* Bug tracking and workflow automation.

---

## Tools Used

* Google Chrome.
* Chrome DevTools.
* Cypress.
* GitHub.
* Trello.
* n8n.
* Excel / Google Sheets.
* Screenshots as test evidence.
* Postman, for API testing when applicable.

---

## Automation Implemented

### Cypress Test Automation

Cypress was used to automate selected end-to-end test scenarios for the web application.

The automated tests include validations for key flows such as:

* Page loading.
* Room availability.
* Booking form behavior.
* Contact form validation.
* Admin login scenarios.
* Positive and negative test cases.

### n8n Workflow Automation

n8n was used to automate parts of the testing workflow, especially the bug reporting process.

The automation was designed to support the QA process by reducing manual work and keeping bug documentation organized.

The n8n workflow includes:

1. Receiving or processing bug information.
2. Sending bug data to Trello.
3. Creating or updating bug cards.
4. Registering bug details in an Excel / Google Sheets file.
5. Keeping the bug tracking process centralized and consistent.

### Trello Bug Tracking

Trello was used as a visual bug tracking tool.

Each bug card can include:

* Bug title.
* Module affected.
* Steps to reproduce.
* Expected result.
* Actual result.
* Priority.
* Severity.
* Evidence.
* Current status.

### Excel / Google Sheets Bug Report Automation

Excel / Google Sheets was used to maintain a structured bug report.

The spreadsheet includes information such as:

* Bug ID.
* Title.
* Module.
* Environment.
* Priority.
* Severity.
* Steps to reproduce.
* Expected result.
* Actual result.
* Evidence.
* Status.
* Trello card link.

This allows the project to keep a clear record of detected bugs while also connecting the spreadsheet with the Trello workflow.

---

## Critical Flows Analyzed

### Flow 1: Room Booking

1. Navigate to the home page.
2. View available rooms.
3. Select a room.
4. Choose check-in and check-out dates.
5. Complete the user information.
6. Confirm the booking.
7. Verify the confirmation message.

### Flow 2: Contact Form

1. Navigate to the contact section.
2. Complete the name, email, phone, subject, and message fields.
3. Submit the form.
4. Verify the confirmation message or validation errors.

### Flow 3: Admin Login

1. Navigate to `/admin`.
2. Enter username and password.
3. Submit the login form.
4. Verify successful access or authentication error message.

---

## Bug Report Format

```txt
ID:
Title:
Module:
Environment:
Priority:
Severity:

Preconditions:

Steps to Reproduce:
1.
2.
3.

Expected Result:

Actual Result:

Evidence:

Status:

Trello Card Link:
```

---

## Project Structure

```txt
project-root/
│
├── cypress/
│   ├── e2e/
│   ├── fixtures/
│   └── support/
│
├── cypress.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## How to Run the Project

### Install Dependencies

```bash
npm install
```

### Open Cypress

```bash
npx cypress open
```

### Run Cypress Tests in Headless Mode

```bash
npx cypress run
```

---

## Expected Deliverables

* Manual test cases.
* Automated Cypress test cases.
* Bug reports with evidence.
* Trello board with registered bugs.
* Excel / Google Sheets bug tracking file.
* n8n automation workflow.
* Final testing documentation.

---

## Project Status

In progress.

This project is part of a QA Automation learning process focused on strengthening manual testing, test automation, bug reporting, and workflow automation skills.
