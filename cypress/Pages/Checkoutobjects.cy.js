import basePage from "./basePage.cy";
class Checkoutobjects extends basePage
{
   #checkoutTitle=".title";
   #fname="#first-name";
   #lname="#last-name";
   #zipcode="#postal-code";
   #continue="#continue";
   #error="[data-test='error']";
   #checkoutOverview=".title";
   #summary=".summary_info_label";
   #summaryvalue=".summary_value_label";
   #total=".summary_total_label";
   #finish="#finish";
   #product="#back-to-products";

   get CheckoutTitle()
   {
    return cy.get(this.#checkoutTitle);
   }

   setfirstName(fname)
   {
    return cy.get(this.#fname).type(fname);
   }

   setlastName(lname)
   {
    return cy.get(this.#lname).type(lname);

   }

   setzipCode(zcode)
   {
    return cy.get(this.#zipcode).type(zcode);

   }

   Continue()
   {
    return cy.get(this.#continue).click();
   }

   get ValidationError()
   {
    return cy.get(this.#error);
   }

   get CheckoutOverview()
   {
    return cy.get(this.#checkoutOverview);
   }

   get SummaryInfoLabel()
   {
    return cy.get(this.#summary);
   }

   get SummaryValue()
   {
    return cy.get(this.#summaryvalue);
   }

   get PriceTotal()
   {
    return cy.get(this.#total);
   }

   ClickFinish()
   {
    return cy.get(this.#finish).click();
   }

   ClickBackProducts()
   {
    return cy.get(this.#product).click();
   }


} 
export default Checkoutobjects;

