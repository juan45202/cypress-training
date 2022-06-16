class GeneralStepPage {
    
    private proceed: string;
    private proceed2: string;
    private proceed3: string;

    constructor() {
        this.proceed = ".cart_navigation .button span";
        this.proceed2 = "Proceed to checkout";
        this.proceed3 = "I confirm my order";
    }

    public proceedToCheckout2(): void {
        cy.get(".cart_navigation").contains("Proceed to checkout").click();
    }

    public proceedToCheckout(): void {
        cy.get(this.proceed).click()
    }
}

export { GeneralStepPage }
