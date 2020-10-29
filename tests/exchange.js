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
        browser.pause(short)
        //$('input[type="text"]')
        

    })
})


