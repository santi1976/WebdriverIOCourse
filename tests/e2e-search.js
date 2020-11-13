import App from '../page-objects/App'
import Navbar from '../page-objects/components/Navbar'
import LoginPage from '../page-objects/pages/LoginPage'
import * as dataHelper from '../lib/data-helpers'





describe('E2E - Search', function(){
    it('Should load homepage', function(){
        App.openHomePage()
    }) 

    it('Should submit searchbox', function(){
        Navbar.search(dataHelper.getRandomName())
        const results = LoginPage.expectedResult
        expect(results).toHaveText('Search Results:')  
        browser.pause(5000)
        
    }) 
})