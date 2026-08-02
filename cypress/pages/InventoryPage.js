import HeaderComponent from "./HeaderComponent";
import ItemComponent from "./ItemComponent";

export default class InventoryPage {
    constructor() {
        this.header = new HeaderComponent();
    }

    getHeader() {
        return this.header;
    }

    getInventoryItemsList() {
        return cy.get('[data-test="inventory-item"]')
    }
    getInventoryItemsPrice(){
        return cy.get('[data-test="inventory-item-price"]')
    }
    getInventoryItemsName(){
        return cy.get('[data-test="inventory-item-name"]')
    }
    get sortingButton(){
        return cy.get('.select_container')
    }
    clickSortingButton(){
        this.sortingButton.click()
    }
    selectSortFromZToA(){
       return cy.get('[data-test="product-sort-container"]').select("za")
    }
    selectSortFromAToZ(){
        return cy.get('[data-test="product-sort-container"]').select("az")
    }
    selectSortFromLowToHighPrice(){
        return cy.get('[data-test="product-sort-container"]').select("lohi")
    }
    selectSortFromHighToLowPrice(){
        return cy.get('[data-test="product-sort-container"]').select("hilo")
    }

    getItemsImgs(){
        return cy.get('.inventory_item_img img')
    }
    getAddToCartButtons(){
        return cy.get('.btn.btn_primary.btn_small.btn_inventory ')
    }
    clickAddToCartButtons(){
        this.getAddToCartButtons()
            .each(($button)=> {cy.wrap($button).click()})
    }
    getChosenItemComponent(index) {
        return this.getInventoryItemsList().eq(index).then((el) => {
            return new ItemComponent(el);
        })
    }
    getRandomItemComponent() {
        return this.getInventoryItemsList()
            .then((items) => {
                const randomIndex = Math.floor(Math.random() * items.length);
                const el = items.eq(randomIndex);
                return new ItemComponent(el);
            });
    }

    getRandomItemComponents(numberOfItems){
        let chosenIndexes=[];
        let chosenItems=[];
        return this.getInventoryItemsList()
            .then((items)=>{
                while(chosenItems.length < numberOfItems) {
                    let randomIndex = Math.floor(Math.random() * items.length);
                    if (!chosenIndexes.includes(randomIndex)) {
                        chosenIndexes.push(randomIndex);
                        const el = items.eq(randomIndex);
                        chosenItems.push(new ItemComponent(el));
                    }
                }
                 return chosenItems;
            })
    }

}