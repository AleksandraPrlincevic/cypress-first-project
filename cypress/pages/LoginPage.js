import HeaderComponent from "./HeaderComponent";

export default class LoginPage {

    get usernameField(){
        return cy.get('#user-name')
    }
    get passwordField(){
        return cy.get('#password')
    }
    get loginButton(){
        return cy.get('#login-button')
    }
    get errorMessage(){
        return cy.get('[data-test=error]')
    }
}
//export default new LoginPage()
