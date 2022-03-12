import User from '../models/User'

export default class ClassicSingleton {
    private static _instance: ClassicSingleton | null = null
    private users: User[] = []

    private constructor () {}

    static getInstance(): ClassicSingleton {
        if (ClassicSingleton._instance === null) {
            ClassicSingleton._instance = new ClassicSingleton()
        }

        return ClassicSingleton._instance
    }

    add(user: User): void {
        this.users.push(user)
    }
    remove(index: number): void {
        this.users.splice(index, 1)
    }
    getByName(userName: string): User | undefined {
        return this.users.find(user => user.name === userName)
    }
}
