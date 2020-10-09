const { expect } = require("@jest/globals")
const ChargingStation = require("./ChargingStation")
const Person = require("./Person")
const Scooter = require("./Scooter")

describe('Scooters charge',() => {
    test('it takes 2000 ms to charge a scooter', async () => {
        const scooter = new Scooter()
        const person = new Person('Angela')
        const station = new ChargingStation()
        person.hireScooter(scooter)
        person.returnScooter()
        expect(scooter.charged).toBeFalsy()        
        await station.chargeScooter(scooter)
        expect(scooter.charged).toBeTruthy()        
    })
})