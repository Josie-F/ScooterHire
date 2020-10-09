class Scooter {
    static availablescooters = []
    
    constructor() {
        this.charged = true
        this.constructor.availablescooters.push(this)

    }
}

module.exports=Scooter