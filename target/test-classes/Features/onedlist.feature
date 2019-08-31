@tag
Feature: Add Customer
  I want to use this template for my feature file

  @tag1
  Scenario: Generate a Customer ID
    Given User should launch browser
    And User click Add Customer link
    When User provides valid credentials3
      | Mee | Meenakshi | ab@gmail.com | chennai | 1234567890 |
    Then Verify ID is displayed
