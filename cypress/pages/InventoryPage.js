class InventoryPage {
  // ===== Selectors =====
  selectors = {
    addToCartButton: (productId) => `#add-to-cart-${productId}`,
    cartIcon: '#shopping_cart_container',
  }

  // ===== Actions =====
  waitForPageLoad(productId) {
    cy.get(this.selectors.addToCartButton(productId)).should('be.visible')
  }

  addProductToCart(productId) {
    cy.get(this.selectors.addToCartButton(productId)).click()
  }

  openCart() {
    cy.get(this.selectors.cartIcon).should('be.visible').click()
  }
}

export default new InventoryPage()
