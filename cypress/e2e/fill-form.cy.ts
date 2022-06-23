import {RestrationFormPage} from "../page/index";

describe("Fill the Student Registration Form", () => {
  let registrationFormPage: RestrationFormPage;

  beforeEach(() => {
    registrationFormPage = new RestrationFormPage();
  });

  it("Interacting with the form", () => {
    // Arrange
    const personalInformation = {
      name: "Holmes",
      lastName: "Salazar",
      email: "hibarras@email.com",
      gender: "Male",
      mobileNumber: "3656589156",
      dateOfBirth: "12 May,2021",
      hobbies: ["Music", "Reading"],
      currentAddress: "Av siempreViva # 123",
      state: "Uttar Pradesh",
      city: "Agra",
    };
    registrationFormPage.visitFormPage();

    // Action
    registrationFormPage.fillForm(personalInformation);

    // Assert
    registrationFormPage.checkForm(personalInformation);
  });
});
