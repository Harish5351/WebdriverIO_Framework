Feature: Login using selenium webdriverIO

Scenario: Verify login functionality  of demo website
Given User is on login page
When User enters email "hari@foundtoo.com" and password "start@101"
Then User verifies "Successfully Logged in..." message on page
