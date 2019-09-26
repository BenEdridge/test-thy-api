Feature: Status checking

    Checking all endpoints work

    Scenario Outline: Checking all endpoints
        Given the request URL is <url>
        When I send a GET request
        Then I get an OK response

        Examples:
            | url                | result |
            | "/v1/"             | 1      |
            | "/v1/swagger.json" | 1      |
            | "/"                | 1      |
