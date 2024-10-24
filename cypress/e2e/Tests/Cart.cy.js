import basePage from "../../Pages/basePage.cy.js";
import cartObjects from "../../Pages/cartObjects.cy.js";



const Cart= new cartObjects();
describe("Products", ()=>{
    beforeEach(()=>{
    cy.FixtureLoginData();
    cy.url().should('include', '/inventory.html');
    cy.addProductToCart();
    cy.url().should('include', '/cart.html');
    Cart.Logo.should("be.visible").and("have.text","Swag Labs");
    Cart.BurgerMenu.should("be.visible");
    Cart.ShoppingCartLink.should("be.visible");
    })

    it("Validate cart items, remove first item and checkout", ()=>{  
    Cart.CartTitle.should("be.visible").and("have.text","Your Cart");
    Cart.ItemName.eq(0).should("have.text","Sauce Labs Fleece Jacket");
    Cart.ItemName.eq(1).should("have.text","Sauce Labs Bike Light");

    //remove one item
    Cart.AddtoCart(0).should("be.enabled").and("have.text", "Remove");  
    Cart.AddtoCartClick(0);


    //continue shopping
    Cart.ContinueShopping.should("be.enabled").and("have.text","Continue Shopping");
    Cart.ContinueShoppingclick();
    cy.url().should('include', '/inventory.html');
    
    //return back to cart page

    Cart.ShoppingCartLinkClick();

    //checkout
    
    Cart.Checkoutclick();
    cy.url().should("include","/checkout-step-one.html")
    })
})
