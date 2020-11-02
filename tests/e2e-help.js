import App from '../page-objects/App'
import Navbar from '../page-objects/components/Navbar'
import LoginPage from '../page-objects/pages/LoginPage.js'

describe('E2E test - Login', function(){

    it('Should login app', function(){
        App.openLoginPage()
        LoginPage.login('username', 'password')
        Navbar.insideNavbarIsVisible()
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
