import { short, medium, long} from '../tests/lib/timeouts'
import { mobile, tablet, desktop} from '../tests/lib/devices'

describe('Example Automation', function() {
     it('Visita a práctica Automation', function() {
        browser.url('http://automationpractice.com/index.php');
        browser.pause(short)
        expect(browser).toHaveUrl('http://automationpractice.com/index.php')
        expect(browser).toHaveTitle('My Store')
    })


    it('H es visible', function(){   
        const h1= $('h1')
        h1.waitForExist();
        expect(h1).toBeVisible();
    })

    it('H3 es visible', function(){
        const h3 = $('h3');
        h3.waitForExist();
        expect(h3).toBeVisible()
    }) 

     it('chequear link', function(){
        const link = $('#header > div.nav > div > div > nav > div.header_user_info > a');
        expect(link).toHaveLink('http://automationpractice.com/index.php?controller=my-account');


    }) 

    it('Get element text', function(){
        const text = $('h1').getText()
        const element = $('h1')
        element.waitForExist()
        expect(element).toHaveText('Automation Practice Website')
    })    



    it('Assert Attribute', function(){
        browser.url('https://devexpress.github.io/testcafe/example/');
        const button = $('#submit-button')
        button.waitForExist()
        expect(button).toHaveAttrContaining('type', 'submit') //atributo y luego valor - type : submit

    })

    it('Assert Value', function(){
        const button = $('#populate');
        button.waitForExist();
        expect(button).toHaveValue('Populate');

    })

    it('Save Screenshot', function(){
        browser.saveScreenshot('your-nam6e.png');

    })

     it('Change Browser Viewport', function(){
        browser.setWindowSize(800, 600);
        browser.pause(short)
    }) 

    it('Set Mobile view', function(){
        browser.setWindowSize(mobile[0], mobile[1])
        browser.pause(short)
    })

    it('Set Tablet view', function(){
        browser.setWindowSize(tablet[0], tablet[1])
        browser.pause(short)
    })

    it('Set Desktop view', function(){
        browser.setWindowSize(desktop[0], desktop[1])
        browser.pause(short)
    })
})





