import basePage from "./basePage.cy";
class CartObjects extends basePage
{
    #carttitle=".title";
    #continue="#continue-shopping";
    #checkout="#checkout";

  get CartTitle()
    {
      return cy.get(this.#carttitle);
    }

  get ContinueShopping()
    {
      return cy.get(this.#continue);
    }

    ContinueShoppingclick()
    {
      return this.ContinueShopping.click();
    }

    Checkoutclick()
    {
      return cy.get(this.#checkout).click();
    }

    


} 
export default CartObjects;