import InventoryPage from "../pages/InventoryPage";
import ItemComponent from "../pages/ItemComponent";
import loginData from '../fixtures/LoginData.json';
import HeaderComponent from "../pages/HeaderComponent";
import CartPage from "../pages/CartPage";

const inventoryPage = new InventoryPage();
const headerComponent = new HeaderComponent();
const cartPage = new CartPage();

  describe('SauceDemo add items', ()=>{
      beforeEach(()=>{
          cy.visit('https://www.saucedemo.com/');
          cy.login(loginData.validLogins.username,
                   loginData.validLogins.password);
      });
        it('Should be able to add one item to the Cart', ()=>{
            let itemName;
            let itemPrice;
            let itemPhoto;
         inventoryPage.getRandomItemComponent()
             .then((item)=>{
                 itemName = item.inventoryItemName.text();
                 itemPrice = item.inventoryItemPrice.text();
                 itemPhoto = item.inventoryItemPhoto.attr('src');
                 item.clickAddToCartButton();
            })
            inventoryPage.getHeader().cartIconBadge
                .should('be.visible')
                .and('have.text', '1');
            headerComponent.clickCartIcon();
             cartPage.getfirstItem()
                     .should('be.visible')
        })
  })