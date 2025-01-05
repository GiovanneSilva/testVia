# Automated Testing on the SwagLabs website
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/GiovanneSilva/testVia/blob/main/LICENSE) 

# About the project

This is a test automation project developed with the aim of simulating purchase scenarios on an e-commerce site. Using the Cypress tool, automated tests are run to check that the functionalities work, from user creation to purchase flow, etc.

# Technologies used
- javaScript
- Cypress
- Node.js
  
# Prerequisites
- Node.js (version 12 or higher)
- npm (Node Package Manager)
  
# Cloning the Repository
- Open the terminal.
- Navigate to the directory where you want to clone the repository.
- Run the following command to clone the repository: git clone

# Installing Dependencies
- Navigate to the newly cloned directory
- Install the project's dependencies by running the following command: npm install

# Run the project
- After installing the dependencies, you can run the Cypress tests with the following command: npx cypress open

# Skills
- Faker library
- PageObjects standard 

# Scenarios

Feature: Successful purchase
  - As a customer
  - I want to make a successful purchase on the Casas Bahia website
  - To receive the products I have chosen

Scenario: Making a successful purchase
- Given that the user is logged in to the Casas Bahia website
- And has selected a desired item for purchase
- When the user follows the purchase flow, adding the item to the cart and providing the necessary information
- Then the user should receive a confirmation of the purchase
- And the user should see the message “Purchase successfully completed”

Feature: Unavailable product warning
  - As a customer
  - I want to receive a warning when a desired item is unavailable on the Casas Bahia website
  - To be notified when the product is back in stock

  Scenario: Receive notice of unavailable product
- Given that the user is logged in to the Casas Bahia website
- When the user searches for the desired item
- And sees that the item is unavailable
- And chooses to receive a notification when the item is available
- Then the user should see the stock warning confirmation message

  # Automated
  - Validation of the purchase flow payment with boleto


# Author

Giovanne Silva Braz Barbosa

https://www.linkedin.com/in//giovanne-silva-3b91aa197/
