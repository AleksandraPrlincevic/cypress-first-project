import loginData from '../fixtures/LoginData.json';

import InventoryPage from "../pages/InventoryPage";
const inventoryPage = new InventoryPage()

describe('SauceDemo sort items', ()=> {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        cy.login(loginData.validLogins.username,
            loginData.validLogins.password);
    });
    it('Sorts items from low to high price on Inventory page', () => {
       inventoryPage.clickSortingButton()
       inventoryPage.selectSortFromLowToHighPrice()
        inventoryPage.getInventoryItemsPrice()
            .then(($prices)=>{
               const actualPrices = [...$prices].map(el=>parseFloat(el.innerText.replace('$','')));
               const expectedPrices = [...$prices].map(el=>parseFloat(el.innerText.replace('$',''))).sort((a,b)=> a-b);
               expect(actualPrices).to.deep.equal(expectedPrices)
            })
    })
    it('Sorts items from high to low price on Inventory page',()=>{
        inventoryPage.clickSortingButton()
        inventoryPage.selectSortFromHighToLowPrice()
        inventoryPage.getInventoryItemsPrice()
            .then(($prices)=>{
                const actualPrices =[...$prices].map(el=> parseFloat(el.innerText.replace('$','')));
                const expectedPrice =[...$prices].map(el=>parseFloat(el.innerText.replace('$', ''))).sort((a,b)=>b-a);
                expect(actualPrices).to.deep.equal(expectedPrice)
            })
    })
    it('Sorts items from A to Z on Inventory page',()=>{
        inventoryPage.clickSortingButton()
        inventoryPage.selectSortFromAToZ()
        inventoryPage.getInventoryItemsName()
            .then(($names)=>{
                const actualNames =[...$names].map(el=> el.innerText);
                const expectedNames =[...$names].map(el=>el.innerText).sort((a,b)=>a.localeCompare(b))//.sort()
                expect(actualNames).to.deep.equal(expectedNames)
            })
    })
    it('Sorts items from Zto A on Inventory page', ()=>{
        inventoryPage.clickSortingButton()
        inventoryPage.selectSortFromZToA()
        inventoryPage.getInventoryItemsName()
            .then(($names)=>{
                const actualNames = [...$names].map(el=>el.innerText)
                const expectedNames = [...$names].map(el=>el.innerText).sort((a,b)=>b.localeCompare(a))//.sort().reverse();
                expect(actualNames).to.deep.equal(expectedNames)
            })
    })
})