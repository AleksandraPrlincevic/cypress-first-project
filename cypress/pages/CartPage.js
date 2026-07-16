import HeaderComponent from "./HeaderComponent";
import CartItemComponent from "./CartItemComponent";
export default class CartPage {
    constructor(){
        this.header = new HeaderComponent();
    }
    getHeader(){
        return this.header;
    }
    get itemsList(){
        return cy.get('[data-test="inventory-item"]');
    }
    getFirstItemComponent(){
        return this.itemsList.eq(0)
            .then((cartItem)=>{
            return new CartItemComponent(cartItem)
        })
    }
}
