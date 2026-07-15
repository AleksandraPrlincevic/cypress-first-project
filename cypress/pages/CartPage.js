import HeaderComponent from "./HeaderComponent";

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
    getFirstItem(){
        return this.itemsList.eq(0);
    }
}
