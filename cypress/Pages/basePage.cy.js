class basePage{

    #cart_link=".shopping_cart_link";
    #cart_badge=".shopping_cart_badge";
    #logo=".app_logo";
    #burgerbutton=".bm-burger-button";
    #bMenu=".bm-menu";
    #menuCross=".bm-cross-button";
    #itemName=".inventory_item_name";
    #cartButton=".btn";
    #inventoryList=".inventory_list";

   


visit()
{
    cy.visit('/');
}


 get Logo()
{
    return cy.get(this.#logo);
   

}

//PRODUCT CLASS OBJECT TO BE USED IN LOGIN CLASS
 get InventoryList()
{
    return cy.get(this.#inventoryList);
}

get ShoppingCartLink()
    {
        return cy.get(this.#cart_link);
    }

 ShoppingCartLinkClick()
    {
      return this.ShoppingCartLink.click();
    }

get ShoppingCartBadge()
    {
        return cy.get(this.#cart_badge);
    }



get BurgerMenu()
{
  return cy.get(this.#burgerbutton);
}

BurgerMenuClick()
{

  return this.BurgerMenu.click();
}

get BurgerMenuExpand()
{
  return cy.get(this.#bMenu);
}

 BurgerMenuClose()
{
  return cy.get(this.#menuCross).click();
}

get ItemName()
{
    return cy.get(this.#itemName);
}

AddtoCart(index)
{
    return cy.get(this.#cartButton).eq(index);
}

AddtoCartClick(clickIndex)
{
    return this.AddtoCart(clickIndex).click();
}


/*typeAndWait(element, text, timeout) {
    return cy.get(element).type(text).then(() => {
      cy.wait(timeout);
      return cy.get(element).then((el) => {
        return el;
      }, (error) => {
        cy.log(`Error during wait for typing: ${error.message}`);
        throw error;
      });
    }, (error) => {
      cy.log(`Error typing in element: ${error.message}`);
      throw error;
    });
  }*/
  /*clickAndWait(element, timeout, expectedCondition) {
    return cy.get(element)
      .click()
      .then(() => {
        if (expectedCondition) {
          return cy.wait(timeout).then(() => cy.get(expectedCondition));
        } else {
          return cy.wait(timeout);
        }
      })
      .then(() => {
        // Success handler (optional)
        // You can add any logic here that should execute if the click and wait are successful
      });
  }*/
  
}



    

export default basePage;