/// <reference types="cypress" />
import { selectProduct } from '../base/baseLogic/baseLogicLogic'
import { fillDeliveryDetails } from '../base/baseLogic/baseLogicLogic'
import { finalizePurchase } from '../base/baseLogic/baseLogicLogic'
import { login } from '../Login/LoginLogic/loginLogic'
describe("Jornada de compra com sucesso", () => {
    beforeEach(() => {
        cy.goToSite();
        login();
    })
    it('Validação do fluxo de compra', () => {
        selectProduct();
        fillDeliveryDetails();
        finalizePurchase();
    })
})