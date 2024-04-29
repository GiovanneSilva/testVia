import { acceptCookiesPage } from'../e2e/base/baseLogic/baseLogicLogic';
import { goToRegister } from'../e2e/Home/HomeLogic/homeLogic';
import { fillRegister } from'../e2e/Register/registerLogic/registerLogicLogic';


Cypress.Commands.add('goToSite', () => {
    const baseUrl = Cypress.config().baseUrl;
    cy.visit(baseUrl);
});

Cypress.Commands.add('createNewUser', () => {
    acceptCookiesPage();
    goToRegister();
    fillRegister();
    
});