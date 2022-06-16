class MenuContentPage {
    private tShirtMenu: string;
    private menuContentPageURL: string

    constructor() {
        this.menuContentPageURL = "http://automationpractice.com/"
        this.tShirtMenu = ".sf-menu > li > a";
    }

    public visitMenuContentPage(): void {
        cy.visit(this.menuContentPageURL)
    }

    public goToTShirtMenu(): void {
        cy.get(this.tShirtMenu).contains("T-shirts").click()
    }
}

export { MenuContentPage }
