Feature: Checking calculator functionality

Scenario: Verify addition on calculator
Given User is on calculator page
When User taps on "4"
And User taps on operator
And User taps on "5"
Then User verifies answer as "9"

Scenario Outline: Verify user can perform multiple operation
Given User is on calculator page
When User clicks on num1 "<number1>"
And User clicks on the "<operator>"
And User clicks on num2 "<number2>"
Then User verifies "<answer>"
Examples:
    | number1 |number2 | operator | answer |
    | 4       | 5      | +        | 9      |
    | 5       | 3      | -        | 2      |
    | 4       | 5      | *        | 20     |
    | 6       | 2      | /        | 3      |