import { render } from '@redwoodjs/testing'

import ViewTodo from './ViewTodo'

describe('ViewTodo', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ViewTodo />)
    }).not.toThrow()
  })
})
