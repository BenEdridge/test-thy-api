Feature: Testing Authenticated Routes

As a developer using a Restful API
I want to to be able to retrieve a swagger file

Background: Login
    Given we have logged in

    Scenario: Requesting /login
        Given the request URL is "/login"
        When I send a GET request
        Then I get an OK response
        Then the result is:
        | code    | 401 |
        | message | 1   |
