import IMeal from '../interfaces/IMeal'

export abstract class BoxItem implements IMeal {
    constructor (private price: number) {}

    getPrice(): number {
        return this.price
    }
}

export class MainDish extends BoxItem {}
export class SideDish extends BoxItem {}
export class Beverage extends BoxItem {}
export class Dessert extends BoxItem {}
