import InventoryPage from "../pages/InventoryPage";
import ItemComponent from "../pages/ItemComponent";
import loginData from '../fixtures/LoginData.json';

const inventoryPage = new InventoryPage();

  describe('SauceDemo add items', ()=>{
      beforeEach(()=>{
          cy.visit('https://www.saucedemo.com/');
          cy.login(loginData.validLogins.username,
                   loginData.validLogins.password);
      });
        it('Should be able to add one item to the Cart', ()=>{
         inventoryPage.getChosenItemComponent(0)
             .then((item)=>{
             item.clickAddToCartButton();
            })
        })
  })