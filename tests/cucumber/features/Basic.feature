Feature: Testing Basic Endpoint

    Scenario: Requesting /
        Given the request URL is "/"
        When I send a GET request
        Then I get an OK response

    Scenario: BEN /
        Given the request URL is "/login"
        When I send a GET request
        Then I get an OK response
