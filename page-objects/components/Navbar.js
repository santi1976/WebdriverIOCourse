import Base from '../Base'
//create this navbar since the #signi_button doesnt belong to Login page, but navbar. We treat this separately.
class Navbar extends Base {
    get signInButton() {
        return $('#signin_button')
    }



    get settingsButton(){
        return $('.icon-cog')
    }

    get insideNavbar(){
        return $('.nav-tabs')
    }

    get helpButton(){
        return $('#help_link')
    }

    get searchBox(){
        return $('#searchTerm')
    }

    clickSignIn(){
        this.signInButton.waitForExist()
        this.signInButton.click()
    }

    search(text){
        this.searchBox.waitForExist()
        this.searchBox.setValue(text)
        browser.keys('Enter')
    }

    clickSettings(){
        this.settingsButton.waitForExist()
        this.settingsButton.click()
    }

    clickHelp(){
        this.helpButton.waitForExist()
        this.helpButton.click()
    }

 
    insideNavbarIsVisible(){
        this.insideNavbar.waitForExist()
    }

    signInButtonIsVisible(){
        this.signInButton.waitForExist() //we reuse the signinButton function already made
    }



}

export default new Navbar