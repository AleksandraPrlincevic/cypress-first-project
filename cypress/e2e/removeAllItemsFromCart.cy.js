import InventoryPage from "../pages/InventoryPage";
import ItemComponent from "../pages/ItemComponent";
import loginData from '../fixtures/LoginData.json';
import HeaderComponent from "../pages/HeaderComponent";
import CartPage from "../pages/CartPage";
import CartItemComponent from "../pages/CartItemComponent";

const inventoryPage = new InventoryPage();
const headerComponent = new HeaderComponent();
const cartPage = new CartPage();
const cartIconComponent = new CartItemComponent();

describe('Saucedemo remove items', ()=> {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        cy.login(loginData.validLogins.username,
            loginData.validLogins.password);
        cy.addMultipleRandomItems(4);
    })
    it('can remove all items from cart', () => {
        headerComponent.clickCartIcon()
        cartPage.makeCartItemComponentsFromList().then((items) => {
            items.forEach((item) => {
                item.clickRemoveFromCartButton();
            })
        })
    })
})
