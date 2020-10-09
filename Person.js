const { availablescooters } = require('./Scooter')
const Scooter = require('./Scooter')

class Person {

    constructor(name) {
        this.name = name
        this.personScooter = null
    }

    hireScooter(scooter) {
        const hiring = Scooter.availablescooters.indexOf(scooter)
        Scooter.availablescooters.splice(hiring, 1)
        this.personScooter = scooter
    }

    returnScooter() {
        this.personScooter.charged = false
        Scooter.availablescooters.push(this.personScooter)
    }
}

module.exports = Person