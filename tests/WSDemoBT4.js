 describe('Demo', function() {
    it('Visita a página Demo', function() {
        browser.url('https://bt4.worldsysweb.com/');
        browser.pause(2000)
        expect(browser).toHaveUrl('https://bt4.worldsysweb.com/')
        expect(browser).toHaveTitle('Login')
    })

    it('div es visible', function(){
        const h3 = $('h3');
        expect(h3).toBeVisible()
    })

    describe('E2Etest- Login / Logout Flow', function(){
        it('Should not login with invalid credentials', function(){
            browser.url('https://bt4.worldsysweb.com/');
/*      const usuario = $('#usuario');
        usuario.waitForExist(); */
        $('#usuario').waitForExist()
        $('#usuario').click()

        })
      


    })

}) 