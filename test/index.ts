import {greeting} from '../src/index.ts'

test('Greeting', () => {
  expect(greeting).toBe('Hello World!')
})
