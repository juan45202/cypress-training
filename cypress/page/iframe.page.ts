class IframePage {
    private ifrmaPageURL: string;
    private iframeSelector: string;
    private titleText: string;
    private cssSelector: string;

    constructor() {
        this.ifrmaPageURL = "https://www.w3schools.com/html/html_iframe.asp";
        this.iframeSelector = "[title=\"W3Schools HTML Tutorial\"]";
        this.titleText = "HTML Tutorial";
        this.cssSelector = "[title=\"CSS Tutorial\"]";
    }

    public visitIframePage(): void {
        cy.visit(this.ifrmaPageURL)
        cy.wait(10000)
    }

    public getFrameTitle(): void {
        cy.iframe(this.iframeSelector).find("h1").should("have.text", this.titleText);
    }

    public goToCssPageInFrame(): void {
        cy.iframe(this.iframeSelector).find(this.cssSelector).click();
    }
}

export { IframePage }
