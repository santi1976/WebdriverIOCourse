describe('E2E test - Currency Exchange', function(){
    it('Should login app', function(){
        browser.url('http://zero.webappsecurity.com/index.html')
        $('#signin_button').waitForExist() 
        $('#signin_button').click()
        $('#login_form').waitForExist()
        $('#user_login').setValue('username')
        $('#user_password').setValue('password')
        $('input[type="submit"]').click()
        $('.icon-user').waitForExist()
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