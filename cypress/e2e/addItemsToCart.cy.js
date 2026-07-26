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
                 //itemPhoto = item.inventoryItemPhoto.attr('src');
                 item.clickAddToCartButton();
            })
            inventoryPage.getHeader().cartIconBadge
                .should('be.visible')
                .and('have.text', '1');
            headerComponent.clickCartIcon();
             cartPage.getFirstCartItemComponent()
                 .then((item)=>{
                   cy.wrap(item.cartItemName).should('have.text', itemName);
                   cy.wrap(item.cartItemPrice).should('have.text', itemPrice);
                   //cy.wrap(item.cartItemPhoto).should('have.attr', 'src', itemPhoto); Ne postoji photo na cartstranici
            })
        })

      it('Should be able to add multiple random items to Cart',()=>{
          let addedItemsList = [];
          inventoryPage.getRandomItemComponents(4).each((item)=>{
              item.clickAddToCartButton();
              addedItemsList.push({name:item.inventoryItemName.text(), price: item.inventoryItemPrice.text()});
          })
          headerComponent.cartIconBadge
              .should('be.visible')
              .and('have.text', '4')
              headerComponent.clickCartIcon()
              cartPage.makeCartItemComponentsFromList().then((items)=>{
              expect(items).to.have.length( addedItemsList.length)
              items.forEach((item)=> {
                    let match = addedItemsList.find((it) =>
                      it.name === item.cartItemName.text() && it.price === item.cartItemPrice.text());
                          expect(match).to.exist;
                      })
              })
      })
  })

