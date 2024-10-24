import basePage from "../../Pages/basePage.cy.js";
import Checkoutobjects from "../../Pages/Checkoutobjects.cy.js";


const Checkout = new Checkoutobjects();
describe("Products", ()=>{
    beforeEach(()=>{
    cy.FixtureLoginData();
    cy.url().should('include', '/inventory.html');
    cy.addProductToCart();
    cy.url().should('include', '/cart.html');
    cy.CartProductsCheckout();
    cy.url().should("include","/checkout-step-one.html")
    Checkout.Logo.should("be.visible").and("have.text","Swag Labs");
    Checkout.BurgerMenu.should("be.visible");
    Checkout.ShoppingCartLink.should("be.visible");

    
    })

    it("Checkout Information and validation error", ()=>{  
    Checkout.CheckoutTitle.should("have.text","Checkout: Your Information");

    Checkout.Continue();
    
    Checkout.ValidationError.eq(0).should("have.text","Error: First Name is required");

    //Enter details and validate
    const firstname=Checkout.setfirstName("Yasra");
    firstname.should("have.value","Yasra");
    const lastname=Checkout.setlastName("Shams");
    lastname.should("have.value","Shams");
    const zipcode=Checkout.setzipCode("35013");
    zipcode.should("have.value","35013");

    //Continue

    Checkout.Continue();

    cy.url().should("include","/checkout-step-two.html");

    //payment info validations

    Checkout.CheckoutOverview.should("be.visible").and("have.text","Checkout: Overview");
    // Order no
    Checkout.SummaryInfoLabel.eq(0).should("have.text","Payment Information:");
    Checkout.SummaryValue.eq(0).should("have.text","SauceCard #31337");

    //Total
    Checkout.SummaryInfoLabel.eq(2).should("have.text","Price Total");
    Checkout.PriceTotal.should("have.text","Total: $64.78");

    //completing order

    Checkout.ClickFinish();

    cy.url().should("include","/checkout-complete.html");

    //Checkout.ClickBackProducts();





    })


})
