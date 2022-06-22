class ProductsListPage {
    
    private addCart: string;
    private proceedToCheckout: string
    private generalSelector : string

    constructor() {
        this.addCart = ".ajax_add_to_cart_button > span";
        this.proceedToCheckout = ".button-container > .button-medium > span";
        this.generalSelector = ".product_list"
    }

    public goToCheckout(): void {
        cy.get(this.proceedToCheckout).click()
    }

    private findProductByName(productToFind : string) {
       return cy.get(this.generalSelector).filter(`:contains(${productToFind})`)
    }

    public addToCart(productName : string): void {
        this.findProductByName(productName).find("a > span").contains("Add to cart").click();
    }   
}

export { ProductsListPage }
