import { render } from '@redwoodjs/testing'

import AddTodo from './AddTodo'

describe('AddTodo', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AddTodo />)
    }).not.toThrow()
  })
})
