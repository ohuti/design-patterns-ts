import type { Config } from '@jest/types'

// Or async function
export default async (): Promise<Config.InitialOptions> => {
    return {
        transform: {
            '^.+\\.(t|j)sx?$': '@swc/jest',
        },
        testEnvironment: 'node',
        verbose: true,
        testMatch: ['**.spec.ts'],
    }
}
