    import { elementsHome } from'../HomeElementsPage/elementsHome';

    export function goToRegister(){
        cy.get(elementsHome.hamburgerMenu).click();
        cy.contains(elementsHome.registerLink, elementsHome.registerText).click();
    }