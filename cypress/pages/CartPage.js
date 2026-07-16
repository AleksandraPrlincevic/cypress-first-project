import HeaderComponent from "./HeaderComponent";
import CartItemComponent from "./CartItemComponent";

export default class CartPage {
    constructor(){
        this.header = new HeaderComponent();
    }
    getHeader(){
        return this.header;
    }
    get cartItemsList(){
        return cy.get('[data-test="inventory-item"]');
    }
    getFirstCartItemComponent(){
        return this.cartItemsList.eq(0)
            .then((cartItem)=>{
            return new CartItemComponent(cartItem)
        })
    }
}
