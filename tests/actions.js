import { short, medium, long } from '../tests/lib/timeouts'


describe('Browser Actions', function(){
/*     it('Inputs', function(){
        browser.url('https://devexpress.github.io/testcafe/example/');      
        const input = $('#developer-name');
        input.waitForExist();
        input.setValue('Mike');
        browser.pause(short)
        input.clearValue()
        browser.pause(short)
        input.addValue('Mike')
        browser.pause(short)
    }) 

    it('click', function(){
        const buttonPopulate = $('#populate')
        buttonPopulate.waitForExist()
        buttonPopulate.click()
    }) */
/* 
    it('checkbox & Radio Button', function(){
        browser.url('https://devexpress.github.io/testcafe/example/');
        const radio = $('#windows')
        radio.waitForExist()
        radio.click()
        browser.pause(medium)

        const checkbox=$('#traffic-markup-analysis')
        checkbox.waitForExist()
        checkbox.click()
        browser.pause(medium)

    }) */

    it('Select Box', function(){
        browser.url('https://devexpress.github.io/testcafe/example/');
        const select = $('#preferred-interface')
        select.waitForExist()
        select.selectByVisibleText('JavaScript API')
        browser.pause(long)

    })
})