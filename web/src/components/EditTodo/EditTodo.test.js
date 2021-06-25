import { render } from '@redwoodjs/testing'

import EditTodo from './EditTodo'

describe('EditTodo', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditTodo />)
    }).not.toThrow()
  })
})
