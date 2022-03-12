import User from '../models/User'

const FunctionSingleton = (() => {
    const users: User[] = []

    return {
        add(user: User): void {
            users.push(user)
        },
        remove(index: number): void {
            users.splice(index, 1)
        },
        getByName(userName: string): User | undefined {
            return users.find(user => user.name === userName)
        }
    }
})()

export default FunctionSingleton
