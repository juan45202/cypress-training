class LoginPage {
    
    private campEmail: string;
    private campPassword: string
    private userEmail: string;
    private userPassword: string
    private submitLogin: string

    constructor() {
        this.campEmail = "#email";
        this.campPassword = "#passwd";
        this.userEmail = "aperdomobo@gmail.com";
        this.userPassword = "WorkshopProtractor";
        this.submitLogin = "#SubmitLogin > span";
    }

    public completeForm(): void {
        cy.get(this.campEmail).type(this.userEmail);
        cy.get(this.campPassword).type(this.userPassword);
    }

    public signIn(): void {
        cy.get(this.submitLogin).click()
    }
}

export { LoginPage }