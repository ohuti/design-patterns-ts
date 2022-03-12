import IMeal from '../interfaces/IMeal'
import { BoxItem } from './BoxItem'

export default class MealBox implements IMeal {
    private items: BoxItem[] = []

    getPrice(): number {
        return this.items.reduce((sum, item) => sum + item.getPrice(), 0)
    }

    add (...items: BoxItem[]): void {
        items.forEach((item) => this.items.push(item))
    }
}
