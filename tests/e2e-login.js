import App from '../page-objects/App'
import LoginPage from '../page-objects/pages/LoginPage'
import Navbar from '../page-objects/components/Navbar'


describe('E2e login logout', function(){
    it('should not login with invalid credentials', function(){
        App.openHomePage()
        Navbar.clickSignIn()
        LoginPage.formIsVisible()
        LoginPage.fillForm('invalid username', 'invalid password')
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
        LoginPage.submitForm()
        Navbar.insideNavbarIsVisible()

    })


    it('Should log out from app', function(){
        App.logout()
        Navbar.signInButtonIsVisible()
        
    })  
})


