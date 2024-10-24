import basePage from "../../Pages/basePage.cy.js";
import ProductsObject from "../../Pages/ProductsObject.cy.js";


const Products= new ProductsObject();
describe("Products", ()=>{
    beforeEach(()=>{
    cy.FixtureLoginData();
    Products.Logo.should("be.visible").and("have.text","Swag Labs");
    Products.ProductTitle.should("be.visible").and("have.text","Products");
    Products.BurgerMenu.should("be.visible"); //get methods so not treated as function
    Products.ShoppingCartLink.should("be.visible");

    })

    it("Burger Menu", ()=>{
    Products.BurgerMenuClick();
    Products.BurgerMenuExpand.should("be.visible");
    Products.BurgerMenuClose();
    

    })

    it("Sorting Products", ()=>{

        //check active selection
        Products.ActiveProduct.should("have.text","Name (A to Z)");

        //sorting products
       Products.SortProduct.select("Name (Z to A)");;
       Products.ActiveProduct.should("have.text","Name (Z to A)");
       //checking first selecting items
       Products.ItemName.eq(0).should("have.text","Test.allTheThings() T-Shirt (Red)");

       //Price low to high
       Products.SortProduct.select("Price (low to high)");
       Products.ActiveProduct.should("have.text","Price (low to high)");
       Products.ItemName.eq(0).should("have.text","Sauce Labs Onesie");
       Products.ItemPrice.should("have.text","$7.99");

       //Price high to low
       Products.SortProduct.select("Price (high to low)");
       Products.ActiveProduct.should("have.text","Price (high to low)");
       Products.ItemName.eq(0).should("have.text","Sauce Labs Fleece Jacket");
       Products.ItemPrice.should("have.text","$49.99");

        
        
        
        })

    it("Adding products to cart", ()=>{

    //inventory list exists
    Products.InventoryList.should("be.visible");

    Products.InventoryItem.should("be.visible");

    //checking that add to cart button is enabled and then adding product
    Products.AddtoCart(3).should("be.enabled").and("have.text", "Add to cart").then(() => {
        Products.addItemToCart("Sauce Labs Fleece Jacket", 3);  
        Products.AddtoCart(3).should("be.enabled").and("have.text", "Remove");  
    });
    
    
    Products.AddtoCart(1).should("be.enabled").and("have.text", "Add to cart").then(() => {
        Products.addItemToCart("Sauce Labs Bike Light", 1);  
        Products.AddtoCart(1).should("be.enabled").and("have.text", "Remove");  
    });


    //checking cart badge

    Products.ShoppingCartBadge.should("be.visible").and("have.text","2");
    Products.ShoppingCartLinkClick();
    cy.url().should('include', '/cart.html');


    

})

})