Feature: Testing a REST API
    Scenario: Requesting /
        Given the request URL is "/" 
        When I send a GET request
        Then I get an OK response
        And the result is:
            | code      | 200 |
            | message   | 1   |
