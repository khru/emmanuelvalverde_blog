/// <reference types="cypress" />
import okResponse from '../../fixtures/ok-health-check.json';
describe("health check endpoint", () => {
  it("I should get a 200 ok response", () => {
    cy.request("/api/health").should((xhr) => {
      expect(xhr.status).to.eq(200);
      expect(xhr.body).to.deep.equal(okResponse);
    });
  });
});
