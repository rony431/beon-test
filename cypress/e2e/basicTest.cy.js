import loginPage from '../pages/LoginPage'
import inventoryPage from '../pages/InventoryPage'
import cartPage from '../pages/CartPage'
import checkoutPage from '../pages/CheckoutPage'
import { url, user, products, onesie, customer, successMessage } from './pages/selector'

// ===== Tests =====
describe('Sauce Demo - Purchase flow', () => {
  beforeEach(() => {
    loginPage.visit(url)
    loginPage.login(user.username, user.password)
  })

  it('should buy products and complete checkout', () => {
    // Inventory
    inventoryPage.waitForPageLoad(products.fleeceJacket)
    inventoryPage.addProductToCart(products.onesie)
    inventoryPage.addProductToCart(products.boltTShirt)
    inventoryPage.openCart()

    // Cart
    cartPage.validateItemPrice(onesie.name, onesie.price)
    cartPage.goToCheckout()

    // Checkout
    checkoutPage.fillCustomerInfo(customer)
    checkoutPage.validateTotalIsVisible()
    checkoutPage.finishOrder()
    checkoutPage.validateOrderComplete(successMessage)
  })
})
