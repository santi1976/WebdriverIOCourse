module.exports = {
    getRandomName: function(){
        let randonNumber = Math.floor((Math.random()* 100)+1)
        return `name${new Date().getTime().toString()}${randonNumber}`
    },
}

