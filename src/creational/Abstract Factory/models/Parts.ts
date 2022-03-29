import { VehiclePart } from './VehiclePart'

export class Tire extends VehiclePart {
    private constructor(position: string) {
        super(60_000, `Change ${position} tire!`)
    }

    static create(position: string) {
        return new Tire(position)
    }
}

export class Engine extends VehiclePart {
    private constructor() {
        super(100_000, 'Check engine!')
    }

    static create() {
        return new Engine()
    }
}

export class Oil extends VehiclePart {
    private constructor() {
        super(10_000, 'Change Oil!')
    }

    static create() {
        return new Oil()
    }
}
