@smoketest
Feature: smoke test #1, simple user registration

  Scenario: go through login page to button "Create board"

      #actions at login page
    Given open chrome and run planning meme application
    When click twice to button with id "signInButton"
    And type to input with name "usernameArea" text: "user2"
    And press button with name "loginButton"
      #verifying action
    Then verify that user with username "user2" was created