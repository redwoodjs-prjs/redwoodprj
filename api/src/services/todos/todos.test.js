import { todos } from './todos'

describe('todos', () => {
  scenario('returns all todos', async (scenario) => {
    const result = await todos()

    expect(result.length).toEqual(Object.keys(scenario.todo).length)
  })
})
