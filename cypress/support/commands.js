// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
import LoginObjects from "../Pages/LoginObjects.cy.js";
import basePage from "../Pages/basePage.cy.js";
import ProductsObject from "../Pages/ProductsObject.cy.js";
import cartObjects from "../Pages/cartObjects.cy.js";
Cypress.Commands.add('FixtureLoginData', (email, password) => { 

    cy.fixture("Login").then((data)=> {
        const loginPage = new LoginObjects();
        loginPage.visit()
        loginPage.Login(data.username,data.password);
        loginPage.clickSubmitbtn();

    })
})

Cypress.Commands.add('addProductToCart', () => {
    const productsPage= new ProductsObject();
   
    productsPage.addItemToCart("Sauce Labs Fleece Jacket", 3);
    productsPage.addItemToCart("Sauce Labs Bike Light", 1);
    productsPage.ShoppingCartLinkClick();

     

});

Cypress.Commands.add('CartProductsCheckout', () => {
    const cartPage= new cartObjects();
   
    cartPage.ItemName.eq(0).should("have.text","Sauce Labs Fleece Jacket");
    cartPage.ItemName.eq(1).should("have.text","Sauce Labs Bike Light");
    cartPage.Checkoutclick();

});

  
     
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })