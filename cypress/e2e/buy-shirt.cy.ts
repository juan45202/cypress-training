describe("Buy a t-shirt", () => {
  it("Then the t-shirt should be bought", () => {
    cy.visit("http://automationpractice.com/");
    cy.get("#block_top_menu > ul > li:nth-child(3) > a").click();
    cy.get("#center_column a.button.ajax_add_to_cart_button.btn.btn-default").click();
    cy.get(".button-container > .button-medium > span").click();
    cy.get(".cart_navigation span").click();

    // Login user
    cy.get("#email").type("aperdomobo@gmail.com");
    cy.get("#passwd").type("WorkshopProtractor");
    cy.get("#SubmitLogin > span").click();

    // Address
    cy.get(".cart_navigation > .button > span").click();
    cy.get("#cgv").click();

    // Shipping
    cy.get(".cart_navigation > .button > span").click();
    cy.get(".bankwire").click();

    // Payment
    cy.get("#cart_navigation > .button > span").click();
    cy.get(".cheque-indent > .dark").should("have.text", "Your order on My Store is complete.");
  });
});
