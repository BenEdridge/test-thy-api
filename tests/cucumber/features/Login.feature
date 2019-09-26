Feature: Testing Authenticated Routes

As a developer using a Restful API
I want to to be able to retrieve a swagger file

Background: Login
    Given we have logged in

    Scenario: Requesting /
        Given the request URL is "/v1/swagger.json"
        When I send a GET request
        Then I get an OK response
        # Then the result is:
        # | code    | 200 |
        # | message | 1   |
