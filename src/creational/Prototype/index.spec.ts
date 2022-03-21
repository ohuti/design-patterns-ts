import IPrototype from './interfaces/IPrototype'

interface Address {
    street: string
    number: number
}

class Person implements IPrototype<Person> {
    constructor (private name: string, private age: number, private address: Address) {}

    clone(): Person {
        return new Person(this.name, this.age, this.address)
    }

    fullInfos(): string {
        return `${this.name} has ${this.age} years old and lives on ${this.address.street}, ${this.address.number}`
    }

    moveTo(newAddress: Address): void {
        this.address = newAddress
    }
}

test('Prototype protected from shallow copy', () => {
    const person1 = new Person('André', 24, { street: 'Park Avenue', number: 1500 })
    const person2 = person1.clone()

    expect(person1.fullInfos()).toEqual(person2.fullInfos())

    person2.moveTo({ street: 'Mocka street', number: 214 })

    expect(person1.fullInfos()).not.toEqual(person2.fullInfos())
})
