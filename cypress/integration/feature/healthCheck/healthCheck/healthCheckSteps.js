import { Given, Then } from "cypress-cucumber-preprocessor/steps";
let healthCheckResponse

Given(/I make request the health check endpoint to check the app health$/, () => {
  cy.request("/api/health").as('healthCheckResponse');
})

Then(/^I expect the application to be healthy$/, () => {
  cy.get('@healthCheckResponse').then((xhr) => {
    expect(xhr.status).to.eq(200);
    cy.fixture("ok-health-check.json").should("deep.equal", xhr.body);
  })
});
