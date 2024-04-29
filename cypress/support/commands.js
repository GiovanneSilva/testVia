
Cypress.Commands.add('goToSite', () => {
    const baseUrl = Cypress.config().baseUrl;
    cy.visit(baseUrl);
});