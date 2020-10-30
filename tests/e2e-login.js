import App from '../page-objects/App'
import LoginPage from '../page-objects/pages/LoginPage'

describe('E2e login logout', function(){
    it('should not login with invalid credentials', function(){
        App.openHomePage()
        $('#signin_button').waitForExist() 
        $('#signin_button').click()     
        LoginPage.formIsVisible()
        LoginPage.fillForm('invalid username', 'invalid password')
        LoginPage.submitForm()
        LoginPage.pauseLong() // from LoginPage which take pause method from Base
        const error = $('.alert-error')
        expect(error).toHaveTextContaining('password are wrong.')
    }) 
 
     it('browser login with Valid Credentials', function(){
        App.openHomePage()
        $('#signin_button').waitForExist() 
        $('#signin_button').click()
        LoginPage.formIsVisible()
        LoginPage.fillForm('username', 'password')
        LoginPage.submitForm()
        $('.nav-tabs').waitForExist()

    })

    it('Should log out from app', function(){
        $('.icon-user').waitForExist()
        $('.icon-user').click()
        $('#logout_link').waitForExist()
        $('#logout_link').click()
        $('#signin_button').waitForExist()
        
    })  
})





                