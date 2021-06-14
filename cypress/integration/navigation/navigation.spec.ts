/// <reference types="cypress" />

context('Navigate through the main entry points', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    it('should be able to open the homepage', () => {
        cy.get('nav a:first').should('have.text', 'Home').click();

        cy.get('body').should('contain.text', '@todo implement homepage');
    });

    it('should be able to open the contact page', () => {
        cy.get('nav a:last').should('have.text', 'Contact').click();

        cy.get('body').should('contain.text', '@todo implement contact');
    });
});
