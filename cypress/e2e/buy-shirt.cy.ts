import {MenuContentPage, LoginPage, PaymentStepPage,
  ProductsListPage, ShippingStepPage, GeneralStepPage} from "../page/index";

describe("Buy a t-shirt", () => {
  let menuContentPage: MenuContentPage;
  let loginPage: LoginPage;
  let paymentStepPage: PaymentStepPage;
  let productsListPage: ProductsListPage;
  let shippingStepPage: ShippingStepPage;
  let generalStepPage: GeneralStepPage;

  beforeEach(() => {
    menuContentPage = new MenuContentPage();
    loginPage = new LoginPage();
    paymentStepPage = new PaymentStepPage();
    productsListPage = new ProductsListPage();
    shippingStepPage = new ShippingStepPage();
    generalStepPage = new GeneralStepPage();
  });

  it("Then the t-shirt should be bought", () => {
    // Arrange
    const email : string = "aperdomobo@gmail.com";
    const password : string = "WorkshopProtractor";
    const expectedMessage : string = "Your order on My Store is complete.";
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();

    // Action
    productsListPage.addToCart("Faded Short Sleeve T-shirts");
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
