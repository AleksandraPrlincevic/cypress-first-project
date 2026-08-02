import loginData from '../fixtures/LoginData.json';

import InventoryPage from "../pages/InventoryPage";
const inventoryPage = new InventoryPage()
import HeaderComponent from "../pages/HeaderComponent";
const headerComponent = new HeaderComponent()
import CartPage from "../pages/CartPage";
const cartPage = new CartPage()
describe('problem_user tests exploring known bugs and are set to pass if bugs still exist', ()=>{
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.login('problem_user', loginData.validLogins.password)
    })
   it('Displays the same wrong image for every item', ()=>{
        inventoryPage.getItemsImgs()
            .then(($imgs)=>{
               const imgSrcs = [...$imgs].map(img=>img.src)
               const uniques = new Set(imgSrcs) //kolekcija bez duplikata
                expect(uniques.size).to.equal(1) //sve su slike iste zbog buga
            })
    })

    it('Can not sort items from Z to A', ()=>{
        inventoryPage.clickSortingButton()
        inventoryPage.selectSortFromZToA()
        inventoryPage.getInventoryItemsName()
            .then(($names)=>{
                const actualNames = [...$names].map(el=> el.innerText)
                const expectedNames = [...$names].map(el=>el.innerText).sort().reverse()
                expect(actualNames).to.not.equal(expectedNames)  //ne moze se sortirati od Z ka A
            })
    })
    it('Can not sort items from low to high prices', ()=>{
        inventoryPage.clickSortingButton()
        inventoryPage.selectSortFromZToA()
        inventoryPage.getInventoryItemsPrice()
            .then(($prices)=>{
                const actualPrices = [...$prices].map(el=> parseFloat(el.innerText.replace('$','')))
                const expectedPrices = [...$prices].map(el=>parseFloat(el.innerText.replace('$',''))).sort((a,b)=>a-b)
                expect(actualPrices).to.not.equal(expectedPrices)  //ne moze se sortirati od niskih do visokih cena
            })
    })
    it('Can not sort items from high to low prices', ()=>{
        inventoryPage.clickSortingButton()
        inventoryPage.selectSortFromHighToLowPrice()
        inventoryPage.getInventoryItemsPrice()
            .then(($prices)=>{
                const actualPrices = [...$prices].map(el=>parseFloat(el.innerText.replace('$','')))
                const expectedPrices = [...$prices].map(el=>parseFloat(el.innerText.replace('$',''))).sort((a,b)=>b-a)
                expect(actualPrices).to.not.equal(expectedPrices) //ne moze se sortirati od visokih do niskih cena
            })
    })

    it('Can not click on all "Add to cart" buttons on inventory page', ()=>{
        inventoryPage.clickAddToCartButtons()

    })
})
