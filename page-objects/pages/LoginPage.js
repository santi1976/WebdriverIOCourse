import Base from '../Base'
const your_username = process.env.YOUR_USERNAME;
const your_password=  process.env.YOUR_PASSWORD;

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

    get expectedResult(){
        return $('h2')
    }



    //create functions based on previous selector
    formIsVisible() {
        this.loginForm.waitForExist()
    }

    //Note that username is actually the username and same with password
    fillForm(your_username, your_password){
        this.usernameInput.setValue(your_username)
        this.passwordInput.setValue(your_password)
    }

    submitForm(){
        this.submitButton.click()
    }

    login(your_username, your_password) {
        this.loginForm.waitForExist()
        this.usernameInput.setValue(your_username)
        this.passwordInput.setValue(your_password)
        this.submitButton.click()

    }
}

export default new LoginPage