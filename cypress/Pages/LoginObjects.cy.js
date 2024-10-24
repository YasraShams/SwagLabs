import basePage from "./basePage.cy";
class Login extends basePage{

    #username="#user-name";
    #userpassword="#password";
    #loginbutton="#login-button";
    #logo=".login_logo";
    #Homelogo=".app_logo";
    #error="[data-test='error']";
    #errorbtn=".error-button";
    

    get Logo()
    {
        return cy.get(this.#logo);

    }
    setUsername(user)
    {

        return cy.get(this.#username).type(user);
    }

    /*setUsername(user) {
        return this.typeAndWait(this.#username, user, 500);
          }*/

    setPassword(password)
    {

        return cy.get(this.#userpassword).type(password);
    }
    Login(email,password)
    {   
        
        this.setUsername(email);
        this.setPassword(password);
        
    }

    get Submitbutton()
    {
        return cy.get(this.#loginbutton);
    }

    clickSubmitbtn()
    {
        return this.Submitbutton.click();
    }

   /* clickSubmitbtn()
    {
        return this.clickAndWait(this.user, 500, this.Homelogo);
    }*/

    get ErrorMsg()
    {
        return cy.get(this.#error);
    }

     ErrorButton()
    {
        return cy.get(this.#errorbtn).click();
    }


    get HomePageHeader()
    {
        return cy.get(this.#Homelogo);
    }
}


export default Login;
