
class ChargingStation {
    constructor() {

    }

    chargeScooter(scooter) {
        return new Promise((resolve, reject) => setTimeout((scooter) => {
            scooter.charged = true
            resolve()
        }, 2000, scooter));
    }

}

module.exports = ChargingStation