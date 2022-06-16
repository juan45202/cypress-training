class LoginPage {
    
    private campEmail: string;
    private campPassword: string
    private submitLogin: string

    constructor() {
        this.campEmail = "#email";
        this.campPassword = "#passwd";
        this.submitLogin = "#login_form #SubmitLogin > span";
    }

    public login(userEmail : string, userPassword : string): void {
        cy.get(this.campEmail).type(userEmail);
        cy.get(this.campPassword).type(userPassword);
    }

    public signIn(): void {
        cy.get(this.submitLogin).click()
    }
}

export { LoginPage }
