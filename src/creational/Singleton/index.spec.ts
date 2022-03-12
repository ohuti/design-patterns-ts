import ClassicSingleton from './db/ClassicSingleton'
import FunctionSingleton from './db/FunctionSingleton'
import ModuleSingleton from './db/ModuleSingleton'

test('Classic Singleton implementation', () => {
    const db1 = ClassicSingleton.getInstance()
    const db2 = ClassicSingleton.getInstance()

    db1.add({ name: 'André', age: 24 })
    db1.add({ name: 'Bia', age: 23})

    const user1 = db2.getByName('André')
    const user2 = db2.getByName('Bia')

    expect(user1).not.toBe(undefined)
    expect(user1?.age).toBe(24)
    expect(user2?.age).toBe(23)
    expect(db1).toEqual(db2)
})

test('Module Singleton implementation', () => {
    const db1 = ModuleSingleton
    const db2 = ModuleSingleton

    db1.add({ name: 'André', age: 24 })
    db1.add({ name: 'Bia', age: 23})

    const user1 = db2.getByName('André')
    const user2 = db2.getByName('Bia')

    expect(user1).not.toBe(undefined)
    expect(user1?.age).toBe(24)
    expect(user2?.age).toBe(23)
    expect(db1).toEqual(db2)
})

test('Function Singleton implementation', () => {
    const db1 = FunctionSingleton
    const db2 = FunctionSingleton

    db1.add({ name: 'André', age: 24 })
    db1.add({ name: 'Bia', age: 23})

    const user1 = db2.getByName('André')
    const user2 = db2.getByName('Bia')

    expect(user1).not.toBe(undefined)
    expect(user1?.age).toBe(24)
    expect(user2?.age).toBe(23)
    expect(db1).toEqual(db2)
})
