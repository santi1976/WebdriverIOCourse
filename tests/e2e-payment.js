import App from '../page-objects/App'
import Navbar from '../page-objects/components/Navbar'
import LoginPage from '../page-objects/pages/LoginPage.js'

describe('E2E test - Currency Exchange', function(){
    it('Should login app', function(){
        App.openLoginPage()
        LoginPage.login('username', 'password')
        Navbar.insideNavbarIsVisible()
    })

    it('should make payment...', () => {      
        $('#pay_bills_tab').click()
        $('#sp_payee').waitForExist()
        const selectPayee = $('#sp_payee')
        selectPayee.waitForExist()
        selectPayee.selectByAttribute('value','apple')
        const selecAccount = $('#sp_account')
        selecAccount.waitForExist()
        selecAccount.selectByVisibleText('Loan')
        $('#sp_amount').setValue('500')
        $('#sp_date').setValue('2020-03-31')
        browser.keys('Tab')
        $('#sp_description').setValue('Test')
        $('#pay_saved_payees').click()
        const message = $('#alert_content')  
        expect(message).toHaveText('The payment was successfully submitted.')
        
        

    });
})