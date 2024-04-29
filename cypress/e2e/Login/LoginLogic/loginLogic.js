import { elementsLogin } from'../LoginPage/elementsLoginPage'
import { fillRegister } from '../../Register/registerLogicLogic';

export function login() {
    const userData = fillRegister();
    cy.get(elementsLogin.loginFiled).type(userData.userName);
    cy.get(elementsLogin.passwordField).type(userData.password);
    cy.get(elementsLogin.entryButton).click();
}
