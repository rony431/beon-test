class CheckoutPage {
  // ===== Selectors =====
  selectors = {
    firstNameInput: '#first-name',
    lastNameInput: '#last-name',
    postalCodeInput: '#postal-code',
    continueButton: '#continue',
    totalLabel: '[data-test="total-label"]',
    finishButton: '#finish',
    completeHeader: '[data-test="complete-header"]',
  }

  // ===== Actions =====
  fillCustomerInfo({ firstName, lastName, postalCode }) {
    cy.get(this.selectors.firstNameInput).type(firstName)
    cy.get(this.selectors.lastNameInput).type(lastName)
    cy.get(this.selectors.postalCodeInput).type(postalCode)
    cy.get(this.selectors.continueButton).click()
  }

  validateTotalIsVisible() {
    cy.get(this.selectors.totalLabel).should('include.text', 'Total')
  }

  finishOrder() {
    cy.get(this.selectors.finishButton).click()
  }

  validateOrderComplete(message) {
    cy.get(this.selectors.completeHeader).should('include.text', message)
  }
}

export default new CheckoutPage()
