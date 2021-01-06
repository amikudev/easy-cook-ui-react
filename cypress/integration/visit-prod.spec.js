/// <reference types="cypress" />

context("Location", () => {
  beforeEach(() => {
    cy.visit("https://easycooking.co.in");
  });

  it("cy.hash() - get the current URL hash", () => {
    // https://on.cypress.io/hash
    cy.hash().should("be.empty");
  });
});
