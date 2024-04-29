import { elementsBase } from'../baseElementsPage/elementsBase';

export function acceptCookiesPage() {
    cy.get(elementsBase.cookieTerms).should('be.visible').click();
}

export function searchProduct() {
    cy.wait(6000)
    cy.get(elementsBase.searchButton).should('be.visible').click();
    cy.get(elementsBase.searchField).type('Batom')
    cy.get(elementsBase.showMoreProducts).click();
}
 export function selectProduct() {
        cy.get(elementsBase.seeMoreAboutButton).eq(1).click();
        cy.get(elementsBase.buyButton).click();
        cy.get(elementsBase.shoppingBagButton).click();
        cy.get(elementsBase.continueToBuyButton).click();

}
export function fillDeliveryDetails() {
     //inserir dados de entrega
     cy.get(elementsBase.postalCodeField).type('06264270');
     cy.get(elementsBase.residenceNumber).type('250');
     cy.get(elementsBase.addressComplement).type('ap1');
     cy.get(elementsBase.addressReference).type('próximo a casa de cultura');
     cy.get(elementsBase.addressName).type('casa');
     cy.get(elementsBase.saveDeliveryDataButton).click();
     cy.wait(10000)
     cy.get(elementsBase.finalizeDeliveryDetails).click();
}

export function chooseFormPayment() {
     cy.get(elementsBase.formPaymentButton).click();
}

export function finalizePurchase() {
    cy.get(elementsBase.finalizePurchaseButton).then($buttons => {
        if ($buttons.length > 0) {
            const randomIndex = Math.floor(Math.random() * $buttons.length);
            cy.wrap($buttons[randomIndex]).click();
        } else {
            cy.log('Não foi possível finalizar a compra');
        }
    });
}