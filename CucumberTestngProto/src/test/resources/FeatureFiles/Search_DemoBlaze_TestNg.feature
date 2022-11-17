@Module_Login
Feature: DemoBlaze add/delete items to cart

  @UI @Mobile @Automated @Regression @Priority_High
  Scenario Outline: Add_items_to_chart
  #Login Across LOBs
    Given I start a "chrome" sesion and debug environment is set to "Yes"
    When I wait for "DemoBlaze_Home" screen to load
    Then I handle Cookies popup 
    Then I tap on "Laptops"
    Then I tap on "<ItemName>" link
    Then I wait for "Description" screen to load
    Then I tap on "Add to chart"
    Then I wait for alert pop up to appear
    Then I take one screenshot

    Examples:
      |ItemName|
      |Sony vaio i5|
      |Dell i7 8gb|
      

  @UI @Mobile @Automated @Regression @Priority_High @Login_Error
  Scenario: Delete_Dell_i7_8GB_to_chart
  #Login Across LOBs
    Given I start a "chrome" sesion and debug environment is set to "Yes"
    When I wait for "DemoBlaze_Home" screen to load
    Then I handle Cookies popup 
    Then I tap on "Chart"
    Then I click on delete button for "Dell i7 8gb"
    Then I take one screenshot

 @UI @Mobile @Automated @Regression @Priority_High @Login_Error
  Scenario: Delete_Dell_i7_8GB_to_chart
  #Login Across LOBs
    Given I start a "chrome" sesion and debug environment is set to "Yes"
    When I wait for "DemoBlaze_Home" screen to load
    Then I handle Cookies popup 
    Then I tap on "Chart"
    Then I check the price of the order
    Then I tap on "Place order"
    Then I fill all the fields of the place order
    Then I check the order ID and assert price
    Then I take one screenshot
 