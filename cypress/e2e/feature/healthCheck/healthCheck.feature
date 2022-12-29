
Feature: Check the healthcheck of the website

    I want to open a the application and check if the application is healthy

    @focus
    Scenario: Opening a the health check endpoint
        Given I make request the health check endpoint to check the app health
        Then I expect the application to be healthy
