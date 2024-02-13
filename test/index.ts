import {config} from '../src/index.ts'

describe('Index', () => {
  test('Config', () => {
    expect(config).toStrictEqual({environment: 'development'})
  })
})
