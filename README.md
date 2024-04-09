This is an Ionic Angular project. The purpose of this project is to showcase the translation of figma design into angular componetn.

Here are brekout of some important files that you need to modify for your project. Please make sure to replace the placeholders with your own. For example you can use the following syntax

## CSS Variable Usage in Components

colors, font-size, flex-gap from figma design are used as css variales. All Variables are kept inside the theme/variable.scss.

File Location src/theme/variable.scss

# Global Css class

In this project we used ` css class` mutliple time in different components. These are global class which can be used for customizaion for all similer elements in the app. Example button element can be customized by gloabl `.button` class located in global.scss.

File Location src/global.scss

# Compoents

Components are heart of Angular project. Use the following components to build your application:

- Menu-bar - Contains navigation menu items like About, Services, Portfolio.

- Input - Contains input element like text input element. It takes arguments like

  - type : Type of Input field (text, email etc.)
  - placeholder : Placeholder for input field
  - value : Value of the input field

- Select - Contains a select element with options. - placeholder: Placeholder for input field. - value : Value of the input field. - options : List of options as an array of key-value - lable: Lable for select element
- FooterComponent - Contains copyright information, social media icons etc.

- ImageCard - display a circular image, title and description.
  - title : Title
  - description : Description
  - imgUrl : ImageUrl

## Routes

- Homepage: /home
- Subscription: /subscriptions

# Run the application

Make sure you have a node v18 + installed on your machine.

- clone the project. Navigate to the project directory using `cd` command.
- Install node modules by running `npm install`
- Start the server by running `npm serve`. The app will be accessible at http://localhost:8001/.

# Unit Test

Run unit tests for all components using the below commands in separate terminals.

Run all tests using the following commands: `npm test`.
