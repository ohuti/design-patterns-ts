import MealBox from './MealBox';
import { MealBuilder } from './MealBuilder'

export default class MealBuilderDirector {
    constructor (private mealBuilder: MealBuilder) {}

    chefSpecial(): MealBox {
        return this.mealBuilder
            .makeMainDish('meat')
            .makeSideDish('rice', 'beans', 'vegetables')
            .makeDessert('pudding')
            .makeBeverage('juice')
            .getMealBox()
    }
}
