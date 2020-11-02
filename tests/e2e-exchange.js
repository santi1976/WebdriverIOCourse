
import App from '../page-objects/App'
import Navbar from '../page-objects/components/Navbar'
import LoginPage from '../page-objects/pages/LoginPage.js'


describe('E2E test - Currency Exchange', function(){
    it('Should login app', function(){
        App.openLoginPage()
        LoginPage.login('username', 'password')
        Navbar.insideNavbarIsVisible()
    })
 
    it('Should make currency-exchange', function(){       
        $('#pay_bills_tab').waitForExist()
        $('#pay_bills_tab').click()
        const purchaseForeign$ = $('#tabs > ul > li:nth-child(3) > a')
        purchaseForeign$.waitForExist()
        purchaseForeign$.click()
        $('#pc_currency').waitForExist()
        $('#pc_currency').selectByAttribute('value', 'GBP')
        $('#pc_amount').setValue('500')
        $('#pc_inDollars_true').click()      
        $('#purchase_cash').click()
        const success = $('#alert_content')
        expect(success).toHaveTextContaining('successfully purchased.')
        
        
        

    }) 
})


