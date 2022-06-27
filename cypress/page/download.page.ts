class DownloadPage {
    private downloadPageURL: string;
    private textField: string;
    private btnGenerate: string;
    private downloadLink: string;
    private fileLocation: string;

    constructor() {
        this.downloadPageURL = "http://demo.automationtesting.in/FileDownload.html";
        this.textField = "#textbox";
        this.btnGenerate = "#createTxt"
        this.downloadLink = "#link-to-download";
        this.fileLocation = "./cypress/downloads/info.txt"
    }

    public visitDownloadPage(): void {
        cy.visit(this.downloadPageURL)
    }
    
    public generateFile(text: string): void {
        cy.get(this.textField).type(text);
        cy.get(this.btnGenerate).click();
    }
    public downloadFile(): void {
        cy.get(this.downloadLink).click();
    }
    public verifyContentFile(messageFile: string): void {
        cy.readFile(this.fileLocation).should("eq", messageFile);
    }
}

export { DownloadPage }
