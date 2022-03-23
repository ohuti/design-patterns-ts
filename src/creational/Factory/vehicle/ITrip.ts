export type CarType = 'X' | 'Black' | 'Pool'

export default interface ITrip {
    type: CarType
    endTrip(): void
    getTripCost(): string
}
