import { elementsBase } from'../baseElementsPage/elementsBase';

export function validateOrderNumberVisible() {
    cy.wait(10000)
    cy.contains(elementsBase.validateOrderSuccessfully, elementsBase.validateOrderSuccessfullyText).should('be.visible');
    cy.contains(elementsBase.orderNumberField, elementsBase.orderNumberText).should('be.visible');
    cy.get(elementsBase.orderNumber)
        .invoke('text')
        .then(texto => {
            const haveNumber = /\d/.test(texto);
            expect(haveNumber).to.be.true;

            cy.log("Número do pedido: ", texto);
        })
}

export function validatePaymentCode() {
    cy.get(elementsBase.paymentCodeField)
    .find(elementsBase.paymentCodeText)
    .invoke('text')
    .then(texto => {
        const haveNumber = /\d/.test(texto);
        expect(haveNumber).to.be.true;

        cy.log(texto)
    })
cy.contains(elementsBase.copyCodePaymentButton, elementsBase.copyCodePaymentButtonText)
    .find(elementsBase.copyCodePaymentIcon).should('be.visible')
}

export function ValidateDownloaPaymentSlip() {
    cy.get(elementsBase.downloadSlipButton).should('be.visible');
}
