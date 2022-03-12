import { MealBuilder } from "./models/MealBuilder"
import { Beverage, Dessert, MainDish, SideDish } from "./models/BoxItem"
import MealBuilderDirector from "./models/MealBuilderDirector"

let mealBuilder: MealBuilder

beforeAll(() => {
    const mainDishes = {
        meat: new MainDish(12),
        pork: new MainDish(10),
        chicken: new MainDish(9),
        fish: new MainDish(12)
    }

    const sideDishes = {
        rice: new SideDish(2),
        beans: new SideDish(2),
        salad: new SideDish(2),
        vegetables: new SideDish(3)
    }

    const beverages = {
        soda: new Beverage(5),
        water: new Beverage(3),
        juice: new Beverage(4)
    }

    const desserts = {
        pudding: new Dessert(5),
        iceCream: new Dessert(4),
        fruit: new Dessert(3)
    }

    mealBuilder = new MealBuilder(mainDishes, sideDishes, beverages, desserts)
})

test('Builder implementation creating a healthy and a veggie MealBox', () => {
    const healthyMeal = mealBuilder
        .makeMainDish('fish')
        .makeSideDish('salad', 'vegetables')
        .makeBeverage('water')
        .makeDessert('fruit')
        .getMealBox()

    expect(healthyMeal.getPrice()).toEqual(23)

    const veggieMeal = mealBuilder
        .makeSideDish('rice', 'beans', 'vegetables')
        .makeBeverage('juice')
        .getMealBox()

    expect(veggieMeal.getPrice()).toEqual(11)
})

test(`Builder Director making a chef's special`, () => {
    const director = new MealBuilderDirector(mealBuilder)

    const meal = director.chefSpecial()

    expect(meal.getPrice()).toEqual(28)
})
