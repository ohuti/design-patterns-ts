export interface IVehiclePart {
    readonly id: string
    updateMileage(distance: number): 'Ok' | string
    makeRevision(): void
}

export class VehiclePart implements IVehiclePart {
    readonly id: string
    private mileage: number
    private mileageThreshold: number
    private revisionMessage: string

    constructor(mileageThreshold: number, revisionMessage: string, id?: string) {
        this.id = id || new Date().getTime().toString()
        this.mileage = 0

        this.mileageThreshold = mileageThreshold
        this.revisionMessage = revisionMessage
    }
    
    updateMileage(distance: number): 'Ok' | string {
        this.mileage += distance
        if (this.mileage > this.mileageThreshold) {
            return this.revisionMessage
        }

        return 'Ok'
    }

    makeRevision(): void {
        
    }
}
