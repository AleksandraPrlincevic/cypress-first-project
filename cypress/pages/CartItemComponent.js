export default class CartItemComponent {
    constructor(root){
        this.root = root;
    }
    get removeFromCartButon(){
      return this.root.find('button');
    }
    get cartItemName(){
       return this.root.find('[data-test="inventory-item-name"]');
    }
    get cartItemPrice(){
        return this.root.find('[data-test="inventory-item-price"]');
    }
    get cartItemPhoto(){
        return this.root.find('[data-test="inventory-item-photo"]');
    }
    clickRemoveFromCartButton (){
        cy.wrap(this.removeFromCartButon).click();
    }
}