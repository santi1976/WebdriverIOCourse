module.exports = {
    getRandomName: function(){
        let randonNumber = Math.floor((Math.random()* 100)+1)
        return `name${new Date().getTime().toString()}${randonNumber}`
    },


    getRandomId: function(){
        let randonNumber = Math.floor(Math.random() * 1000 + 1)
        return `ID_${new Date().getTime().toString()}${randonNumber}` 
    },

    getRandomPhoneNumber: function(){
        return Math.random().toString.slice(2, 11)
    },

    getRandomEmail: function(){
        return `${new Date().getTime().toString()}${'@email.com'}`
    },
}

