class CartPage {
  // ===== Selectors =====
  selectors = {
    cartItem: '.cart_item',
    itemPrice: '[data-test="inventory-item-price"]',
    checkoutButton: '#checkout',
  }

  // ===== Actions =====
  validateItemPrice(productName, price) {
    cy.contains(this.selectors.cartItem, productName)
      .find(this.selectors.itemPrice)
      .should('include.text', price)
  }

  goToCheckout() {
    cy.get(this.selectors.checkoutButton).click()
  }
}

export default new CartPage()
