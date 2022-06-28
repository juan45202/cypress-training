class IframePage {
    private ifrmaPageURL: string;
    private iframeSelector: string;
    private titleText: string;
    private cssSelector: string;

    constructor() {
        this.ifrmaPageURL = "https://www.w3schools.com/html/html_iframe.asp";
        this.iframeSelector = "[style=\"width:100%;height:350px;overflow:hidden;\"] > iframe";
        this.titleText = "HTML Tutorial";
        this.cssSelector = "[title=\"CSS Tutorial\"]";
    }

    public visitIframePage(): void {
        cy.visit(this.ifrmaPageURL)
    }

    public getFrameTitle(): void {
        cy.iframe(this.iframeSelector).find("h1").should("have.text", this.titleText);
    }

    public goToCssPageInFrame(): void {
        cy.iframe(this.iframeSelector).find(this.cssSelector).click();
    }
}

export { IframePage }
