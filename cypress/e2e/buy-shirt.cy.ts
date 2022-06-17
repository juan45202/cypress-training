import {MenuContentPage, LoginPage, PaymentStepPage,
  ProductsListPage, ShippingStepPage, GeneralStepPage} from "../page/index";

const menuContentPage = new MenuContentPage();
const loginPage = new LoginPage();
const paymentStepPage = new PaymentStepPage();
const productsListPage = new ProductsListPage();
const shippingStepPage = new ShippingStepPage();
const generalStepPage = new GeneralStepPage();

describe("Buy a t-shirt", () => {
  it("Then the t-shirt should be bought", () => {
    // Arrange
    const email : string = "aperdomobo@gmail.com";
    const password : string = "WorkshopProtractor";
    const expectedMessage : string = "Your order on My Store is complete.";
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();

    // Action
    productsListPage.addToCart();
    productsListPage.goToCheckout();
    generalStepPage.proceedToCheckout2();

    loginPage.login(email, password);
    loginPage.signIn();

    generalStepPage.proceedToCheckout();
    shippingStepPage.acceptTerms();

    generalStepPage.proceedToCheckout();
    paymentStepPage.paymentMethod();

    generalStepPage.proceedToCheckout();

    // Assert
    paymentStepPage.getOrderStatus().contains(expectedMessage);
  });
});
