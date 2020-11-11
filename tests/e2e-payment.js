import App from '../page-objects/App'
import InsideNavbar from '../page-objects/components/InsideNavbar'
import Navbar from '../page-objects/components/Navbar'
import LoginPage from '../page-objects/pages/LoginPage.js'
import PaymentPage from '../page-objects/pages/PaymentPage'

describe('E2E test - Currency Exchange', function(){
    it('Should login app', function(){
        App.openLoginPage()
        LoginPage.login('username', 'password')
        Navbar.insideNavbarIsVisible()
    })

    it('should make payment...', () => {   
        browser.setWindowSize(1920, 1080)   
        //$('#pay_bills_tab').click() 
        InsideNavbar.clickPayBillsTab()   
        //$('#sp_payee').waitForExist() 
        const selectPayee = PaymentPage.payee
        selectPayee.waitForExist()
        selectPayee.selectByAttribute('value','apple')
        const selectAccount = PaymentPage.account
        selectAccount.waitForExist()
        selectAccount.selectByVisibleText('Loan')
        PaymentPage.fillForm('500', '2020-03-31', 'Test')
        PaymentPage.clickPayment()
        const message = PaymentPage.messageAlert
        expect(message).toHaveText('The payment was successfully submitted.')
    });
})