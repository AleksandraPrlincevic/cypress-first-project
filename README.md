</> Markdown
# SauceDemo – Cypress Test Automation
## Description:
End-to-end test automation framework for [SauceDemo](https://www.saucedemo.com/), built with **Cypress** and **JavaScript**, using the Page Object Model (POM) pattern.

This project was built as a practice/portfolio project to prepare for a Junior QA Automation Engineer role. A companion project testing the same site with **Java + Selenium** 
is available here:  [Java/Selenium version of this project](https://github.com/AleksandraPrlincevic/saucedemo-selenium-automation-project).
## Tech Stack

     - Node.js v24.18.0
     - Cypress 15.18.0 – end-to-end testing framework
     - JavaScript
     - Page Object Model (POM) design pattern
     - Run on Windows 11
## Project Structure

```


cypress/
├───e2e/                # Test spec files
├───fixtures/           # Page Objects and component classes
├───pages/              # Test data (JSONs
└───support/            # Custom commands and global config

```
### Prerequisites

- [Node.js](https://nodejs.org/) installed

### Installation

```bash
npm install
```
### Running the tests

Open Cypress in interactive mode:

```bash
npx cypress open
```

Or run all tests headlessly in the terminal:

```bash
npx cypress run
```
## What's Covered

- **Login** – valid/invalid credentials, locked-out user, required-field validation
- **Sorting** – price (low-high, high-low) and name (A-Z, Z-A) sorting on the Inventory page
- **Cart** – adding and removing items from the cart
- **`problem_user` regression suite** – a dedicated set of tests documenting known, existing bugs on the `problem_user` account (e.g. identical product images, non-functional sort/remove buttons). These tests are written to **pass while the bugs exist** and would need to be flipped once/if the underlying bugs are fixed.

## Notes

This is a learning/portfolio project — some scenarios were chosen specifically to practice writing precise assertions and to explore edge cases (e.g. broken user accounts) beyond the standard "happy path".
