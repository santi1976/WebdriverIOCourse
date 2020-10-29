import { short, medium, long} from '../tests/lib/timeouts'

describe('E2E test - Login', function(){

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

    it('should load help content...', () => {
        $('.icon-cog').click()
        $('#help_link').waitForClickable()
        $('#help_link').click()
        const title = $('.span8 > h3')
        expect(title).toHaveText('How do I log into my account?')  
        $('*=transfer funds').click()
        expect(title).toHaveText('How do I transfer funds?')
        $('*=I pay bills').click()
        expect(title).toHaveText('How do I pay bills?')




    });
})
