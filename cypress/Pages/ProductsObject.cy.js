import basePage from "./basePage.cy";
class ProductsObject extends basePage
{
    
    #productTitle=".title";
    #inventoryItem=".inventory_item";
    
    #activeProduct=".active_option";
    #sortProduct= ".product_sort_container";
    #itemprice=".inventory_item_price";



    get ProductTitle()
    {
        return cy.get(this.#productTitle);
    }

   

    get InventoryItem()
    {
        return cy.get(this.#inventoryItem);

    }

   

    get ItemPrice()
    {
        return cy.get(this.#itemprice).eq(0);
    }

    

   
//the functions called in this are in base class
    addItemToCart(itemName, clickIndex) {
        this.ItemName.each(($el, index) => {
            if ($el.text().trim() === itemName) {
                this.AddtoCart(index);
                this.AddtoCartClick(clickIndex);
            }
        });
    }

    get ActiveProduct()
    {
        return cy.get(this.#activeProduct);
    }

    get SortProduct()
    {
        return cy.get(this.#sortProduct);
    }

    

    
    




}



export default ProductsObject;