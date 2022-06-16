class AddressStepPage {

    private proceed: string;

    constructor() {
        this.proceed = ".cart_navigation > .button > span";
    }

    public proceedToCheckout(): void {
        cy.get(this.proceed).click()
    }
}

export { AddressStepPage }
