import { IVehiclePart } from './VehiclePart'

export class Vehicle {
    private vehicleParts: IVehiclePart[]
    private partsToReview: IVehiclePart[]

    constructor(...vehicleParts: IVehiclePart[]) {
        this.vehicleParts = vehicleParts
        this.partsToReview = []
    }

    makeTrip(distance: number) {
        let needRevision = false

        this.vehicleParts.forEach(part => {
            const message = part.updateMileage(distance)

            if (message !== 'Ok') {
                this.partsToReview.push(part)
            }
        })

        needRevision = true
    }

    getPartsToReview(): IVehiclePart[] {
        return this.partsToReview
    }

    reviewParts(...parts: IVehiclePart[]) {
        parts.forEach(part => {
            const partIndex = this.partsToReview.findIndex(partToReview => part.id === partToReview.id)

            part.makeRevision()
            
            this.partsToReview = this.partsToReview.splice(partIndex, 1)
        })
    }
}
