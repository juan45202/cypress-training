class ProductsListPage {
    
    private addCart: string;
    private proceedToCheckout: string

    constructor() {
        this.addCart = "#center_column a.button.ajax_add_to_cart_button.btn.btn-default";
        this.proceedToCheckout = ".button-container > .button-medium > span"
    }

    public addToCart(): void {
        cy.get(this.addCart).click();
    }

    public goToCheckout(): void {
        cy.get(this.proceedToCheckout).click()
    }
}

export { ProductsListPage }