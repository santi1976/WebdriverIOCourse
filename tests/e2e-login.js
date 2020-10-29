import App from '../page-objects/app'

describe('E2e login logout', function(){
    it('should not login with invalid credentials', function(){
        App.openHomePage()
        $('#signin_button').waitForExist() 
        $('#signin_button').click()
        $('#login_form').waitForExist()
        $('#user_login').setValue('invalid')
        $('#user_password').setValue('invalid')
        $('input[type="submit"]').click()
        const error = $('.alert-error')
        expect(error).toHaveTextContaining('password are wrong.')



    }) 
 
     it('browser login OK', function(){
        App.openHomePage()
        $('#signin_button').waitForExist() 
        $('#signin_button').click()
        $('#login_form').waitForExist()
        $('#user_login').setValue('username')
        $('#user_password').setValue('password')
        $('input[type="submit"]').click()
        $('.icon-user').waitForExist()



    })

    it('Should log out from app', function(){
        $('.icon-user').waitForExist()
        $('.icon-user').click()
        $('#logout_link').waitForExist()
        $('#logout_link').click()
        $('#signin_button').waitForExist()


        
    })  
})





                