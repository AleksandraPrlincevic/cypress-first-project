export default class ItemComponent {
    constructor(root){
        this.root=root;
    }
    get addToCartButton(){
      return this.root.find('button');
        }

    get inventoryItemName(){
        return this.root.find('[data-test="inventory-item-name"]')
        }

    get inventoryItemPrice(){
        return this.root.find('[data-test="inventory-item-price"]')
        }

    get inventoryItemPhoto() {
        return this.root.find('[data-test="inventory-item-photo"]')
    }

    clickAddToCartButton(){
        cy.wrap(this.addToCartButton).click();
    }
    clickItemPhotoLink(){
        cy.wrap(this.inventoryItemPhoto).click();
    }
    clickItemNameLink(){
        cy.wrap(this.inventoryItemName).click();
    }
}