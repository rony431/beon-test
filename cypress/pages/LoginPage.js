class LoginPage {
  // ===== Selectors =====
  selectors = {
    usernameInput: '#user-name',
    passwordInput: '#password',
    loginButton: '#login-button',
  }

  // ===== Actions =====
  visit(url) {
    cy.visit(url)
  }

  login(username, password) {
    cy.get(this.selectors.usernameInput).type(username)
    cy.get(this.selectors.passwordInput).type(password)
    cy.get(this.selectors.loginButton).click()
  }
}

export default new LoginPage()
