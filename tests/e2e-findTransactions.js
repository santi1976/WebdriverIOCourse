import App from '../page-objects/App'
import Navbar from '../page-objects/components/Navbar'
import InsideNavbar from '../page-objects/components/InsideNavbar'
import LoginPage from '../page-objects/pages/LoginPage.js'
import findTransactionsPage from '../page-objects/pages/findTransactionsPage'

describe('E2E test - Currency Exchange', function(){
    it('Should login app', function(){
        App.openLoginPage()
        LoginPage.login('username', 'password')
        Navbar.insideNavbarIsVisible()
    })

    it('Should go to Account Activity with no Result', () => {
/*      $('#account_activity_tab').click()        
        $('#tabs > ul > li:nth-child(2) > a').waitForExist()     
        $('#tabs > ul > li:nth-child(2) > a').click() */
        InsideNavbar.clickAccountActivityTab()
        InsideNavbar.clickFiltersLink()
/*      $('#aa_description').waitForExist()
        $('#aa_description').setValue('Test')
        $('button[type="submit"]').click() */
        findTransactionsPage.fillDescription('Test')
        findTransactionsPage.submitFilter()
        findTransactionsPage.resultsTableIsVisible()
        const message = findTransactionsPage.message
        expect(message).toHaveText('No results.')
       
    })

    
    
})

