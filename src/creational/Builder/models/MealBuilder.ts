import { Beverage, BoxItem, Dessert, MainDish, SideDish } from "./BoxItem"
import MealBox from "./MealBox"

interface IMealBuilder {
    getMealBox(): MealBox
}

export class MealBuilder implements IMealBuilder {
    private mealBox: MealBox = new MealBox()

    constructor (
        private mainDishes: { [key: string]: MainDish },
        private sideDishes: { [key: string]: SideDish },
        private beverages: { [key: string]: Beverage },
        private desserts: { [key: string]: Dessert }
    ) {}

    makeMainDish(mainDish: string): this {
        this.mealBox.add(this.mainDishes[mainDish])
        return this
    }

    makeSideDish(...sideDishes: string[]): this {
        sideDishes.forEach(sideDish => {
            this.mealBox.add(this.sideDishes[sideDish])
        })
        return this
    }

    makeBeverage(beverage: string): this {
        this.mealBox.add(this.beverages[beverage])
        return this
    }

    makeDessert(dessert: string): this {
        this.mealBox.add(this.desserts[dessert])
        return this
    }

    getMealBox(): MealBox {
        const mealBox = this.mealBox
        this.mealBox = new MealBox()
        return mealBox
    }
}
