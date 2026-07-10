import HeaderComponent from "./HeaderComponent";
import ItemComponent from "./ItemComponent";

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
    getChosenItemComponent(index){
      return this.getInventoryItemsList().eq(index).then((el)=>{
          return new ItemComponent(el);
      })
    }
}