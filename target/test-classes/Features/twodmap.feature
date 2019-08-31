@tag
Feature: Add Customer
  I want to use this template for my feature file

  @tag1
  Scenario: Generate a Customer ID
    Given User should launch browser
    And User click Add Customer link
    When User provides valid credentials6
      | fname  | lname  | email          | Address | Phoneno    |
      | DMap   | Vandhu | vr@yahoo.com   | Andhra  | 1234567890 |
      | woDMap | Mee    | mee@gmail.com  | Andhra  | 1234567890 |
      | DMap   | Lav    | nare@yahoo.com | Andhra  | 1234567890 |
      | DMap   | K      | kar@gmail.com  | Andhra  | 1234567890 |
    Then Verify ID is displayed
