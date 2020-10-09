const Scooter = require('./Scooter')
const Person = require('./Person')
const { availablescooters } = require('./Scooter')
const { test, expect } = require('@jest/globals')




describe('Hire bikes', () => {
    test('A person can hire a scooter', () => {
        const person = new Person ('Angela')
        const scooter= new Scooter()
        const scooter2 = new Scooter()

        expect(Scooter.availablescooters.length).toBe(2)
        
        person.hireScooter(scooter)

        expect(Scooter.availablescooters.length).toBe(1)
    })
    test('battery is empty upon return', () => {
        const scooter = new Scooter()
        const person = new Person ('Angela')
        person.hireScooter(scooter)
        expect(scooter.charged).toBeTruthy()
        person.returnScooter(scooter)
        expect(scooter.charged).toBeFalsy()

    })
})