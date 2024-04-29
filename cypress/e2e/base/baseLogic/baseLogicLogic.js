import { elementsBase } from '../baseElementsPage/elementsBase';
import generateUserData from '../../../fixtures/UserDataGenerate';

export function selectProduct() {

    cy.get(elementsBase.chooseItem).then($elementos => {
        const quantidadeElementos = $elementos.length;

        if (quantidadeElementos > 0) {

            const indiceAleatorio = Math.floor(Math.random() * quantidadeElementos);

            const elementoAleatorio = $elementos.eq(indiceAleatorio);

            cy.get(elementoAleatorio).click();

        } else {
            cy.log('Erro na seleção do produto');
        }
    });
    cy.get(elementsBase.addToCart).click();
    cy.get(elementsBase.selectCart).click();
    cy.get(elementsBase.checkoutButton).click();
}

export function fillDeliveryDetails() {
    const userData = generateUserData();
    const cep = '123456'
    cy.get(elementsBase.firstNameField).type(userData.nome);
    cy.get(elementsBase.lastNameField).type(userData.sobrenome);
    cy.get(elementsBase.postalCodeField).type(cep);
    cy.get(elementsBase.continueToBuyButton).click();
}

export function finalizePurchase() {
    cy.get(elementsBase.finalizePurchaseButton).click();
    cy.get(elementsBase.validatePurchaseFinish).should('have.text', 'THANK YOU FOR YOUR ORDER')
}