import { short, medium, long} from '../tests/lib/timeouts'

describe('E2E - Search', function(){
    it('Should load homepage', function(){
        browser.url('http://zero.webappsecurity.com/index.html')
        $('#searchTerm').waitForExist()

    }) 

    it('Should submit searchbox', function(){
        $('#searchTerm').setValue('bank')
        browser.keys('Enter')
        const results =  $('h2')
        expect(results).toHaveTextContaining('Results')
        
    }) 
})