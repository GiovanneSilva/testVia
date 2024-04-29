/// <reference types="cypress" />
import { searchProduct } from'../base/baseLogic/baseLogicLogic'
import { selectProduct } from'../base/baseLogic/baseLogicLogic'
import { fillDeliveryDetails } from '../base/baseLogic/baseLogicLogic'
import { chooseFormPayment } from '../base/baseLogic/baseLogicLogic'
import { finalizePurchase } from '../base/baseLogic/baseLogicLogic'
import { validateOrderNumberVisible } from '../base/baseLogic/validations'
import { validatePaymentCode } from '../base/baseLogic/validations'
import { ValidateDownloaPaymentSlip } from '../base/baseLogic/validations'
import { login } from '../Login/LoginLogic/loginLogic'
import { logout } from '../Login/LoginLogic/loginLogic';
describe("Jornada de compra com sucesso", () => {
    beforeEach(() => {
        cy.goToSite();
        cy.createNewUser();
        //logout();
    })
    it('Validação do fluxo de compra pagamento com boleto', () => {
        //login();
        searchProduct();
        selectProduct();
        fillDeliveryDetails();
        chooseFormPayment();
        finalizePurchase();
        validateOrderNumberVisible();
        validatePaymentCode();
        ValidateDownloaPaymentSlip();
    })
})