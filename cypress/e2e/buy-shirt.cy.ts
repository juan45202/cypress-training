import {MenuContentPage, AddressStepPage, LoginPage, PaymentStepPage,
  ProductsListPage, ShippingStepPage, ShoppingCartPage, GeneralStepPage} from "../page/index";

const menuContentPage = new MenuContentPage();
const addressStepPage = new AddressStepPage();
const loginPage = new LoginPage();
const paymentStepPage = new PaymentStepPage();
const productsListPage = new ProductsListPage();
const shippingStepPage = new ShippingStepPage();
const shoppingCartPage = new ShoppingCartPage();
const generalStepPage = new GeneralStepPage();

describe("Buy a t-shirt", () => {
  it("Then the t-shirt should be bought", () => {
    // Visiting T-Shirt page
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();

    // products list
    productsListPage.addToCart();
    productsListPage.goToCheckout();

    // Shopping cart
    generalStepPage.proceedToCheckout2();

    // Login user
    loginPage.login("aperdomobo@gmail.com", "WorkshopProtractor");
    loginPage.signIn();

    // Address
    generalStepPage.proceedToCheckout();

    // Shipping
    shippingStepPage.acceptTerms();
    generalStepPage.proceedToCheckout();

    // Payment
    paymentStepPage.paymentMethod();
    generalStepPage.proceedToCheckout();

    // Assert
    paymentStepPage.getOrderStatus().contains("Your order on My Store is complete.");
  });
});
