import '../src/index'

describe('Config', () => {
  test('Environment', async () => {
    expect(process.env['ENVIRONMENT']).toBe('development')
  })
})
