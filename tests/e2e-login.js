import App from '../page-objects/App'
import LoginPage from '../page-objects/pages/LoginPage'
import Navbar from '../page-objects/components/Navbar'
import { browser } from '../lib/config'
import dataHelpers, { getRandomName } from '../lib/data-helpers'




 describe('E2e login logout', function(){
      it('should not login with invalid credentials', function(){
        App.openHomePage()
        Navbar.clickSignIn()
        LoginPage.formIsVisible()
        LoginPage.fillForm(dataHelpers.getRandomName, dataHelpers.getRandomId) //we can use whatever we want from dataHelpers since we have to pass invalidad information. 
        LoginPage.submitForm()
    //  LoginPage.pauseLong() // from LoginPage which take pause method from Base
        const alert = LoginPage.error
        expect(alert).toHaveTextContaining('password are wrong.')
    })  
 
     it('browser login with Valid Credentials', function(){
        App.openHomePage()
        Navbar.clickSignIn()
        LoginPage.formIsVisible()
        LoginPage.fillForm('username', 'password')
        //browser.waitAndClick('.btn-primary') // browser. didn't work for several errors. Decided to skip lessons 47-48-49
        //browser.waitAndTypeText('#user_login', 'username')
        //browser.waitAndTypeText('#user_password', 'password')
        //browser.waitAndClick('.btn-primary')
        LoginPage.submitForm()
        Navbar.insideNavbarIsVisible()

    })


    it('Should log out from app', function(){
        App.logout()
        Navbar.signInButtonIsVisible()
        
    })  
}) 



