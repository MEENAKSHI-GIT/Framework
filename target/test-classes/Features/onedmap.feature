@tag
Feature: Add Customer
  I want to use this template for my feature file

  @tag1
 Scenario: Generate a Customer ID
    Given User should launch browser
    And User click Add Customer link
    When User provides valid credentials5
      | fname   | Meen          |
      | lname   | Meenakshi     |
      | email   | mee@yahoo.com |
      | Address | Andhra        |
      | Phoneno |    9876543210 |
    Then Verify ID is displayed
