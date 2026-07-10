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
        return this.root.find('[data-test="inventory-item-priceW]')
        }

    get inventoryItemPhoto() {
        return this.root.find('[data-test="inventory-item-photo"]')
    }

    clickAddToCartButton(){
        this.addToCartButton.click();
    }
    clickItemPhotoLink(){
        this.inventoryItemPhoto.click();
    }
    clickItemNameLink(){
        this.inventoryItemName.click();
    }
}