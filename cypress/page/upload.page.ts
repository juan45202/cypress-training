class UploadPage {
    private btnUpload: string;
    private uploadPageURL: string;
    private titleSelector: string;

    constructor() {
        this.uploadPageURL = "http://demo.automationtesting.in/FileUpload.html"
        this.btnUpload = "#input-4";
        this.titleSelector = ".file-footer-caption";
    }

    public visitUploadPage(): void {
        cy.visit(this.uploadPageURL)
    }

    public uploadFile(fileName: string): void {
        cy.get(this.btnUpload).attachFile(fileName);
    }

    public verifyFileName(filename: string): void {
        cy.get(this.titleSelector).contains(filename);
    }
}

export { UploadPage }
