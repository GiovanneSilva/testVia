import { elementsRegister } from'../registerElementsPage/elementsRegisterPage';
import generateUserData from '../../../fixtures/UserDataGenerate';

export function fillRegister() {
    const userData = generateUserData();

    cy.get(elementsRegister.firstNameField).type(userData.nome);
    cy.get(elementsRegister.lastNameField).type(userData.sobrenome);
    cy.get(elementsRegister.emailField).type(userData.email);
    cy.get(elementsRegister.passwordField).type(userData.senha);
    cy.get(elementsRegister.confirPasswordField).type(userData.senha);
    cy.get(elementsRegister.cpfField).type(userData.cpf);
    cy.get(elementsRegister.dateBirthField).type(userData.dataNascimento);

    cy.get(elementsRegister.genderRadioButton).click();
    cy.get(elementsRegister.homePhoneField).type(userData.telefone);
    cy.get(elementsRegister.cellphoneField).type(userData.telefone);

    cy.get(elementsRegister.termsAndConditionsButton).click();
    cy.get(elementsRegister.registerButton).click();

    return userData;
}