import {MenuContentPage, DressesListPage} from "../page/index";

describe("The user navigates to the dresses page should", () => {
  let menuContentPage: MenuContentPage;
  let dressesListPage: DressesListPage;

  beforeEach(() => {
    menuContentPage = new MenuContentPage();
    dressesListPage = new DressesListPage();
  });

  it("Show the avaliable dresses", () => {
    // Arrange
    const dresses: string [] = [
      "Printed Dress", "Printed Dress", "Printed Summer Dress", "Printed Summer Dress", "Printed Chiffon Dress",
    ];
    menuContentPage.visitMenuContentPage();

    // Action
    cy.get(".sf-menu > li > a").contains("Dresses").click();
    dressesListPage.getDressProducts();

    // Assert
    dressesListPage.validateItemsNumber(dresses.length);
    dressesListPage.validateItemsNames(dresses);
  });
});
