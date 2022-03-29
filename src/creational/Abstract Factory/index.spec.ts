import { Oil, Tire } from "./models/Parts"
import VehicleFactory from "./VehicleFactory"

test('Get a car and make a trip', () => {
    const myCar = VehicleFactory.make('car')

    myCar.makeTrip(15_000)

    const partsToReview = myCar.getPartsToReview()
    expect(partsToReview.length).toBe(1)
    expect(partsToReview[0]).toBeInstanceOf(Oil)
    myCar.reviewParts(...partsToReview)
    expect(myCar.getPartsToReview.length).toBe(0)
})

test('Get a truck and make a trip', () => {
    const myTruck = VehicleFactory.make('truck')

    myTruck.makeTrip(75_000)

    const partsToReview = myTruck.getPartsToReview()
    expect(partsToReview.length).toBe(7)
    myTruck.reviewParts(...partsToReview)
    expect(myTruck.getPartsToReview.length).toBe(0)
})


test('Get a motorcycle and make a trip', () => {
    const myBike = VehicleFactory.make('motorcycle')

    myBike.makeTrip(120_000)

    const partsToReview = myBike.getPartsToReview()
    expect(partsToReview.length).toBe(4)
    myBike.reviewParts(...partsToReview)
    expect(myBike.getPartsToReview.length).toBe(0)
})