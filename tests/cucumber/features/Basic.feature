Feature: Testing Basic Endpoint

    Scenario: Requesting /v1/
        Given the request URL is "/v1/"
        When I send a GET request
        Then I get an OK response

    Scenario: BEN /v1/swagger.json
        Given the request URL is "/v1/swagger.json"
        When I send a GET request
        Then I get an OK response
