import { short, medium, long} from '../tests/lib/timeouts'

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
        browser.pause(long)
    })

    it('Should go to Account Activity with no Result', () => {

        $('#account_activity_tab').click()        
        $('#tabs > ul > li:nth-child(2) > a').waitForExist()     
        $('#tabs > ul > li:nth-child(2) > a').click()
        $('#aa_description').waitForExist()
        $('#aa_description').setValue('Test')
        $('button[type="submit"]').click()
        const result = $('#filtered_transactions_for_account')
        result.waitForExist()
        expect(result).toHaveText('No results.')
       
    })

    it('Should go to Account Activity with positive Result', () => {
        $('#aa_description').clearValue()        
        $('#aa_description').setValue('OFFICE SUPPLY')
        $('button[type="submit"]').click()
        const result = $('#filtered_transactions_for_account > table > tbody > tr > td:nth-child(2)')
        result.waitForExist()
        expect(result).toHaveTextContaining('OFFICE SUPPLY')
    });
 
    it('Should Search by Date with Positive Result', () => {
        $('#aa_description').clearValue()  
        $('#aa_fromDate').setValue('2012-09-05') 
        $('#aa_toDate').setValue('2020-10-01')  
        $('button[type="submit"]').click()
        const resultoOnlineTransfer = $('#filtered_transactions_for_account > table > tbody > tr:nth-child(1) > td:nth-child(2)')
        resultoOnlineTransfer.waitForExist()
        expect(resultoOnlineTransfer).toHaveTextContaining('#UKKSDRQG6L')
        const resultoOfficeSupply = $('#filtered_transactions_for_account > table > tbody > tr:nth-child(2) > td:nth-child(2)')
        resultoOfficeSupply.waitForExist()
        expect(resultoOfficeSupply).toHaveTextContaining('OFFICE SUPPLY')
    });

    it('Should Search by Amount with Positive Result', () => {
        $('#aa_description').clearValue()  
        $('#aa_fromDate').clearValue()
        $('#aa_toDate').clearValue()
        $('#aa_fromAmount').setValue('100') 
        $('#aa_toAmount').setValue('1000')  
        $('button[type="submit"]').click()
        const byAmount100 = $('#filtered_transactions_for_account > table > tbody > tr:nth-child(1) > td:nth-child(3)')
        byAmount100.waitForExist()
        expect(byAmount100).toHaveText('984.3')
        const byAmount1000 = $('#filtered_transactions_for_account > table > tbody > tr:nth-child(2) > td:nth-child(3)')
        byAmount1000.waitForExist()        
        expect(byAmount1000).toHaveText('1000')
    });
    
    it('Should Search by Amount with Positive Result', () => {
        $('#aa_fromAmount').clearValue() 
        $('#aa_toAmount').clearValue()
        $('#aa_type').selectByAttribute('value', 'WITHDRAWAL')
         $('button[type="submit"]').click()
        const byType = $('#filtered_transactions_for_account > table > tbody > tr > td:nth-child(4)')
        byType.waitForExist()
        expect(byType).toHaveText('50')

    });
    
})

