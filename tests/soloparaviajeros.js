 describe('Demo', function() {
    it('Visita a página Demo', function() {
        browser.url('https://sleepy-beyond-78080.herokuapp.com/');
        browser.pause(2000)
        expect(browser).toHaveUrl('https://sleepy-beyond-78080.herokuapp.com/')
        expect(browser).toHaveTitle('Solo Para Viajeros')
    })


    it('H es visible', function(){
        //get selector
        const h1= $('h1')
        h1.waitForExist();
        expect(h1).toBeVisible();
    })



    it('chequear link', function(){
      const link = $('a');
      expect(link).toHaveLink('https://sleepy-beyond-78080.herokuapp.com/campgrounds');  

    })

    it('Obtener Elemento Texto', function(){
       // const text = $('h1').getText()
        const element = $('h1')
        element.waitForExist()
        expect(element).toHaveText('Bienvenidos a Solo para Viajeros!')

       
    })   

})