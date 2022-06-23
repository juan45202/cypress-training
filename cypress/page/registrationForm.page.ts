type personalInformation = {
    name: string
    lastName: string
    email: string
    gender: string
    mobileNumber: string
    hobbies: string[]
    currentAddress: string
    state: string
    city: string
}
class RestrationFormPage {
    private formPageUrl: string
    private firstName: string;
    private lastName: string;
    private email: string;
    private mobileNumber: string;
    private currentAdress: string
    private state: string
    private city: string

    constructor() {
        this.formPageUrl = "https://demoqa.com/automation-practice-form";
        this.firstName = "#firstName";
        this.lastName = "#lastName";
        this.email = "#userEmail";
        this.mobileNumber = "#userNumber";
        this.currentAdress = "#currentAddress";
        this.state = "#react-select-3-input";
        this.city = "#react-select-4-input";
    }
    
    public visitFormPage(): void {
        cy.visit(this.formPageUrl);
    }

    public fillForm(userData : personalInformation): void {
        cy.get(this.firstName).type(userData.name);
        cy.get(this.lastName).type(userData.lastName);
        cy.get(this.email).type(userData.email);
        cy.contains(userData.gender).click()
        cy.get(this.mobileNumber).type(userData.mobileNumber);
        this.setHobbies(userData.hobbies);
        cy.get(this.currentAdress).type(userData.currentAddress);
        cy.get(this.state).focus().type(`${userData.state}{enter}`);
        cy.get(this.city).focus().type(`${userData.city}{enter}`);
        cy.get("#userForm").submit();
    }

    private setHobbies(userHobbies: string[]): void {
        userHobbies.forEach(element => {
            cy.contains(element).click();
        });
    }

    public checkForm(userData : personalInformation): void {
        Object.entries(userData).forEach((user) => {
            user[0] === "hobbies" ? userData.hobbies.join(", ")  : cy.get('.modal').contains(user[1].toString())
        });
    }

}

export { RestrationFormPage }
