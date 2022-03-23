import Car from "./vehicle/Trip"

test('Start a race with a MOBIL X car', () => {
    const mobilXTrip = Car.create('X')
    const expectedTripCost = (2 * 60 * 60 * 1 * 0.05).toPrecision(2)

    mobilXTrip.endTrip()
    expect(mobilXTrip.getTripCost()).toEqual(expectedTripCost)
})

test('Start a race with a MOBIL Black car', () => {
    const mobilBlackTrip = Car.create('Black')
    const expectedTripCost = (2 * 60 * 60 * 2 * 0.10).toPrecision(2)

    mobilBlackTrip.endTrip()
    expect(mobilBlackTrip.getTripCost()).toEqual(expectedTripCost)
})

test('Start a race with a MOBIL Pool car', () => {
    const mobilPoolTrip = Car.create('Pool')
    const expectedTripCost = (2 * 60 * 60 * 0.5 * 0.05).toPrecision(2)

    mobilPoolTrip.endTrip()
    expect(mobilPoolTrip.getTripCost()).toEqual(expectedTripCost)
})
