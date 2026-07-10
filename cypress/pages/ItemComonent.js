export default class ItemComponent {
    constructor(root){
        this.root=root;
    }
    get addToCartButton(){
        this.root.within(()=>{
           return cy.get('button');
        })
    }
    get inventoryItemName(){
        this.root.within(()=>{
            return cy.get('[data-test="inventory-item-name]')
        })
    }
    get inventoryItemPrice(){
        this.root.within(()=>{
            return cy.get('[data-test="inventory-item-price]')
        })
    }
    get inventoryItemPhoto(){
        this.root.within(()=>{
            return cy.get('[data-test="inventory-item-photo]')
        })
    }

    clickAddToCartButton(){
        this.root.addToCartButton.click();
    }
    clickItemPhotoLink(){
        this.root.inventoryItemPhoto.click();
    }
    clickItemNameLink(){
        this.root.inventoryItemName.click();
    }
}