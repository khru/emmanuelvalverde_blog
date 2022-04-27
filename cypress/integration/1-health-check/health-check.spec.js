/// <reference types="cypress" />


describe("health check endpoint", () => {
  it("I should get a 200 ok response", () => {
    cy.request('/api/health').should((xhr) => {
      expect(xhr.status).to.eq(200);
      cy.fixture('ok-health-check.json').should('deep.equal', xhr.body)
    });
  });
});
