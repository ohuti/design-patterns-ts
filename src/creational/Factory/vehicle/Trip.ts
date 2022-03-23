import ITrip, { CarType } from './ITrip'

const carTypes: CarType[] = [ 'Black', 'Pool', 'X' ]

const costTable = {
    'X': { tariff: 1, timeMultiplier: 0.05 },
    'Black': { tariff: 2, timeMultiplier: 0.10 },
    'Pool': { tariff: 0.5, timeMultiplier: 0.05 }
}

const guardAgainstInvalidCarType = (type: CarType): boolean => {
    return carTypes.includes(type)
}

export default class Trip implements ITrip {
    private startTime: number = 0
    private raceCost: string = '0'

    private constructor(public type: CarType) {}

    // FACTORY METHOD
    static create(type: CarType): Trip {
        if (!guardAgainstInvalidCarType(type)) throw new Error(`${type} is a invalid car type!`)

        return new Trip(type)
    }

    endTrip(): void {
        const endTime = 2 * 60 * 60 // 2 hours in seconds. Both start and end time could be replaced by a "new Date().getTime()" in a real scenario
        const elapsedTime = endTime - this.startTime
        const costPerTime = elapsedTime * costTable[this.type].timeMultiplier
        
        this.raceCost = (costPerTime * costTable[this.type].tariff).toPrecision(2)
    }

    getTripCost(): string {
        return this.raceCost
    }
}
