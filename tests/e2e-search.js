import App from '../page-objects/App'
import Navbar from '../page-objects/components/Navbar'
import LoginPage from '../page-objects/pages/LoginPage'


describe('E2E - Search', function(){
    it('Should load homepage', function(){
        App.openHomePage()
    }) 

    it('Should submit searchbox', function(){
        Navbar.search('bank')
        const results = LoginPage.expectedResult
        expect(results).toHaveText('Search Results:')  
    }) 
})