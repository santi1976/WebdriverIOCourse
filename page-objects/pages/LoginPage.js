import Base from '../Base'

class LoginPage extends Base{ // means also includes methods from Base see Base and e2e-login line 12
    //storing selectors
    get loginForm () {
        return $('#login_form')
    }

    get usernameInput(){
        return  $('#user_login')      
    }

    get passwordInput(){
        return  $('#user_password')   
    }

    get submitButton(){
        return $('input[type="submit"]')
    }

    get error(){
        return $('.alert-error')
    }

    //create functions based on previous selector
    formIsVisible() {
        this.loginForm.waitForExist()
    }

    //Note that username is actually the username and same with password
    fillForm(username, password){
        this.usernameInput.setValue(username)
        this.passwordInput.setValue(password)
    }

    submitForm(){
        this.submitButton.click()
    }
}

export default new LoginPage