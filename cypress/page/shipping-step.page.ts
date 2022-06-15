class ShippingStepPage {
    
    private terms: string;
    private proceed: string

    constructor() {
        this.terms = "#cgv";
        this.proceed = ".cart_navigation > .button > span"
    }

    public aceptTerms(): void {
        cy.get(this.terms).click()
    }

    public proceedToCheckout(): void {
        cy.get(this.proceed).click()
    }
}

export { ShippingStepPage }