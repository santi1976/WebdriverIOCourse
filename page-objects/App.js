class App {
    openHomePage(){
         browser.url('http://zero.webappsecurity.com/index.html')

    }

    logout(){
        browser.url('http://zero.webappsecurity.com/logout.html') //same as url above, but change "index" to "logout"
    }
}

export default new App()