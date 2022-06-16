class PaymentStepPage {

    private bankWire: string;
    private proceed: string;
    private elementToCheck: string;

    constructor() {
        this.bankWire = ".bankwire";
        this.proceed = "#cart_navigation > .button > span";
        this.elementToCheck = ".cheque-indent > .dark";        
    }

    public paymentMethod(): void {
        cy.get(this.bankWire).click()
    }

    public confirmMethod(): void {
        cy.get(this.proceed).click()
    }

    public getOrderStatus() {
        return cy.get(this.elementToCheck);
    }
}

export { PaymentStepPage }
