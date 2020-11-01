import Base from '../Base'
//create this navbar since the #signi_button doesnt belong to Login page, but navbar. We treat this separately.
class Navbar extends Base {
    get signInButton() {
        return $('#signin_button')
    }

    get insideNavbar(){
        return $('.nav-tabs')
    }

    clickSignIn(){
        this.signInButton.waitForExist()
        this.signInButton.click()
    }

    insideNavbarIsVisible(){
        this.insideNavbar.waitForExist()
    }

    signInButtonIsVisible(){
        this.signInButton.waitForExist() //we reuse the signinButton function already made
    }
}

export default new Navbar