import loginData from '../fixtures/LoginData.json';
import LoginPage from "../pages/LoginPage";
const loginPage = new LoginPage();

/*describe('SauceDemo login', ()=>{
    beforeEach(()=>{cy.visit('https://www.saucedemo.com/')});
it('Should login successfully with valid credentials',()=>{
   cy.login('standard_user', 'secret_sauce');
    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('have.text', 'Products');
    cy.contains('Products').should('be.visible');
});
it('Should not login with invalid username', ()=>{
    cy.login('wrong_use', 'secret_sauce');
    cy.url().should('not.include', '/inventory.html');
    cy.get('#login-button').should('be.visible');
    cy.get('[data-test=error]').should('be.visible');
})
});*/
describe('SauceDemo login', ()=>{
    beforeEach(()=>{cy.visit('https://www.saucedemo.com/')});
        it(`Logs in successfully with ${loginData.validLogins.label}`, () => {
            cy.login(loginData.validLogins.username, loginData.validLogins.password);
            cy.url().should('include', '/inventory.html');
            cy.get('.title').should('have.text', 'Products');
            cy.contains('Products').should('be.visible');
            });
        loginData.invalidLogins.forEach((invalidLogin) => {
            it(`Does not login with ${invalidLogin.label}`, () => {
                cy.login(invalidLogin.username, invalidLogin.password)
                cy.url().should('not.include', '/inventory.html')
                loginPage.loginButton.should('be.visible')
                loginPage.errorMessage.should('be.visible')
                    .and('include.text', invalidLogin.message)
            })
        })});

