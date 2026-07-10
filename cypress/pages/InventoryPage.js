import HeaderComponent from "./HeaderComponent";
import ItemComponent from "./ItemComonent";

export default class InventoryPage{
    constructor(){
        this.header= new HeaderComponent();
    }
    getHeader(){
        return this.header;
    }
    getInventoryItemsList(){
        return cy.get('[data-test="inventory-item"]')
    }
    getChosenItem(x){
       const chosenItem = this.getInventoryItemsList().eq(x);
       return new ItemComponent(chosenItem);
    }
}