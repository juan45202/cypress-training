import {MenuContentPage, AddressStepPage, LoginPage, PaymentStepPage,
  ProductsListPage, ShippingStepPage, ShoppingCartPage} from "../page/index";

const menuContentPage = new MenuContentPage();
const addressStepPage = new AddressStepPage();
const loginPage = new LoginPage();
const paymentStepPage = new PaymentStepPage();
const productsListPage = new ProductsListPage();
const shippingStepPage = new ShippingStepPage();
const shoppingCartPage = new ShoppingCartPage();

describe("Buy a t-shirt", () => {
  it("Then the t-shirt should be bought", () => {
    // Visiting T-Shirt page
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();

    // products list
    productsListPage.addToCart();
    productsListPage.goToCheckout();

    // Shopping cart
    shoppingCartPage.goProceedToCheckout();

    // Login user
    loginPage.login("aperdomobo@gmail.com", "WorkshopProtractor");
    loginPage.signIn();

    // Address
    addressStepPage.proceedToCheckout();

    // Shipping
    shippingStepPage.acceptTerms();
    shippingStepPage.proceedToCheckout();

    // Payment
    paymentStepPage.paymentMethod();
    paymentStepPage.confirmMethod();

    // Assert
    paymentStepPage.getOrderStatus().should("have.text", "Your order on My Store is complete.");
  });
});
