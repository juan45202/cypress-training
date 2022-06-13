describe("This is my fisrt Cypress test", () => {
  it("Should be a title", () => {
    cy.visit("https://www.google.com/");
    cy.title().should("eq", "Google");
  });
});
