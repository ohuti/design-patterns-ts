import { Engine, Oil, Tire } from "./models/Parts"
import { Vehicle } from "./models/Vehicle"

export default class VehicleFactory {
    static make(vehicle: 'car' | 'truck' | 'motorcycle') {
        switch(vehicle) {
            case 'car': {
                const frontLeftTire = Tire.create('front left')
                const frontRightTire = Tire.create('front right')
                const rearLeftTire = Tire.create('rear left')
                const rearRightTire = Tire.create('rear right')

                const engine = Engine.create()

                const oil = Oil.create()

                return new Vehicle(frontLeftTire, frontRightTire, rearLeftTire, rearRightTire, engine, oil)
            }

            case 'truck': {
                const frontLeftTire = Tire.create('front left')
                const frontRightTire = Tire.create('front right')
                const midLeftTire = Tire.create('mid left')
                const midRightTire = Tire.create('mid right')
                const rearLeftTire = Tire.create('rear left')
                const rearRightTire = Tire.create('rear right')

                const engine = Engine.create()

                const oil = Oil.create()

                return new Vehicle(frontLeftTire, frontRightTire, midLeftTire, midRightTire, rearLeftTire, rearRightTire, engine, oil)
            }

            case 'motorcycle': {
                const frontTire = Tire.create('front')
                const rearTire = Tire.create('rear')

                const engine = Engine.create()

                const oil = Oil.create()

                return new Vehicle(frontTire, rearTire, engine, oil)
            }

            default: {
                throw new Error('You need to ask for a valid vehicle!')
            }
        }
    }
}
