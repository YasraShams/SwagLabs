import basePage from "../../Pages/basePage.cy.js";
import LoginObjects from "../../Pages/LoginObjects.cy.js";


const Login= new LoginObjects();
describe("Sign-up", ()=>{
beforeEach(()=>{

    Login.visit();
    Login.Logo.should("be.visible").and('have.text',"Swag Labs");


})

    it("Invalid username and password", ()=>{
        

    const username=Login.setUsername('secret');
    const password=Login.setPassword('sauce');
    Login.Submitbutton.should("be.enabled").should("have.value","Login");
    Login.clickSubmitbtn();
    Login.ErrorMsg.should('exist').and('have.text','Epic sadface: Username and password do not match any user in this service');
    Login.ErrorButton();



        })

    it("Sign-up to the page", ()=>{
        cy.fixture("Login").then((data =>{
        const username= Login.setUsername(data.username);
        username.should('have.value',data.username);
        const password= Login.setPassword(data.password);
        password.should("have.value",data.password)
        }
        ))
        
        Login.Submitbutton.should("be.enabled").should("have.value","Login");
        Login.clickSubmitbtn();

        cy.url().should('include', '/inventory.html');
        Login.HomePageHeader.should("be.visible").and("have.text","Swag Labs");





    })

    
})

    
