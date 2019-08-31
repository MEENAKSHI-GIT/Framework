@tag
Feature: Add Customer
  I want to use this template for my feature file

  @tag1
  Scenario: Generate a Customer ID
    Given User should launch browser
    And User click Add Customer link
    When User provides valid credentials4
      | twoDlist | Meenakshi | mee@gmail.com | Chennai | 9876543210 |
      | twoDlist | Yag       | cd@gmail.com  | andhra  | 9876543210 |
    Then Verify ID is displayed
