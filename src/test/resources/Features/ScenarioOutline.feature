@tag
Feature: Add Customer
  I want to use this template for my feature file

  @tag1
  Scenario Outline: Generate a Customer ID
    Given User should launch browser
    And User click Add Customer link
    When User provides valid credentials2"<fname>","<lname>","<email>","<Address>","<Phoneno>"
    Then Verify ID is displayed

    Examples: 
      | fname   | lname     | email         | Address | Phoneno    |
      | Outline | Meenakshi | mee@gmail.com | Andhra  | 1234567890 |
      | Lav     | Mee       | VR@gmail.com  | Khammam | 1234567890 |
