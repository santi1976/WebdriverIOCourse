//import { browser } from '../lib/config'
import App from '../page-objects/App'
import Navbar from '../page-objects/components/Navbar'
import HelpPage from '../page-objects/pages/HelpPage'
import LoginPage from '../page-objects/pages/LoginPage.js'

describe('E2E test - Login', function(){

    it('Should login app', function(){
        App.openLoginPage()
        LoginPage.login('username', 'password')
        Navbar.insideNavbarIsVisible()
    })

    it('should load help content...', () => {
        Navbar.clickSettings()
        Navbar.clickHelp()
        const title = HelpPage.title
        expect(title).toHaveText('How do I log into my account?')
        browser.pause(1000)  
        HelpPage.clickOnTransferFunds()
        expect(title).toHaveText('How do I transfer funds?')
        browser.pause(1000)  
        HelpPage.clickOnPayBills()
        expect(title).toHaveText('How do I pay bills?')




    });
})
