class PaymentStepPage {
    
    private bankWire: string;
    private proceed: string;
    private elementToCheck: string;
    private textToCheck: string;

    constructor() {
        this.bankWire = ".bankwire";
        this.proceed = "#cart_navigation > .button > span";
        this.elementToCheck = ".cheque-indent > .dark";
        this.textToCheck = "Your order on My Store is complete.";
    }

    public paymentMethod(): void {
        cy.get(this.bankWire).click()
    }

    public confirmMethod(): void {
        cy.get(this.proceed).click()
    }

    public checkResultText(): void {
        cy.get(this.elementToCheck).should("have.text", this.textToCheck);
    }
}

export { PaymentStepPage }