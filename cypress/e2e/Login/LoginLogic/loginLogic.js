import { elementsLogin } from'../LoginPage/elementsLoginPage'
import { elementsHome } from'../../Home/HomeElementsPage/elementsHome'
import { fillRegister } from '../../Register/registerLogic/registerLogicLogic';

export function login() {
    const userData = fillRegister();
    cy.get(elementsHome.hamburgerMenu).click();
    cy.get(elementsHome.logginButton).click();
    cy.get(elementsLogin.loginFiled).type(userData.email);
    cy.get(elementsLogin.passwordField).type(userData.senha);
    cy.get(elementsLogin.entryButton).click();
}


export function logout() {
    cy.wait(7000)
    cy.get(elementsHome.hamburgerMenu).click();
    cy.get(elementsHome.logoutButton).eq(1).click();
    cy.reload();
}