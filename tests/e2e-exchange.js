
import App from '../page-objects/App'
import InsideNavbar from '../page-objects/components/InsideNavbar'
import Navbar from '../page-objects/components/Navbar'
import Exchange from '../page-objects/pages/Exchange'
import LoginPage from '../page-objects/pages/LoginPage.js'


describe('E2E test - Currency Exchange', function(){
    it('Should login app', function(){
        App.openLoginPage()
        LoginPage.login('username', 'password')
        Navbar.insideNavbarIsVisible()
    })
 
    it('Should make currency-exchange', function(){       
/*      $('#pay_bills_tab').waitForExist()
        $('#pay_bills_tab').click() */
        InsideNavbar.clickPayBillsTab()  
/*      const purchaseForeign$ = $('#tabs > ul > li:nth-child(3) > a')
        purchaseForeign$.waitForExist()
        purchaseForeign$.click() */
        InsideNavbar.purchaseForeignMoney()
/*      $('#pc_currency').waitForExist()
        $('#pc_currency').selectByAttribute('value', 'GBP')
        $('#pc_amount').setValue('500') */       
        const ExchangeTrans = Exchange.currency
        ExchangeTrans.waitForExist() 
        ExchangeTrans.selectByAttribute('value','GBP')
        Exchange.currencyAmount('500')  
/*      $('#pc_inDollars_true').click()   */
        Exchange.selectPayInDollars()
/*      $('#purchase_cash').click()*/
        Exchange.clickToPurchase()
/*      const success = $('#alert_content')
        expect(success).toHaveText('successfully purchased.')   */
        const success = Exchange.alertMessage
        expect(success).toHaveText('Foreign currency cash was successfully purchased.')
      

    }) 
})


