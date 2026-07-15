export default class HeaderComponent {

    get cartIcon(){
        return cy.get('[data-test="shopping-cart-link"]')
    }
    get cartIconBadge(){
        return cy.get('[data-test="shopping-cart-badge"]')
    }
    get burgerMenu(){
        return cy.get('#react-burger-menu-button')
    }
    clickCartIcon(){
        this.cartIcon.click();
    }
}