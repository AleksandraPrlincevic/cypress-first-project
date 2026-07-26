import HeaderComponent from "./HeaderComponent";
import CartItemComponent from "./CartItemComponent";

export default class CartPage {
    constructor() {
        this.header = new HeaderComponent();
    }

    getHeader() {
        return this.header;
    }

    get cartItemsList() {
        return cy.get('[data-test="inventory-item"]');
    }

    makeCartItemComponentsFromList() {
        let cartComponentsList = [];
        return this.cartItemsList.each(item => {
            cartComponentsList.push(new CartItemComponent(item));
        }).then(() => {
            return cartComponentsList
        });
    }

    getFirstCartItemComponent() {
        return this.cartItemsList.eq(0)
            .then((cartItem) => {
                return new CartItemComponent(cartItem)
            })
    }
}
