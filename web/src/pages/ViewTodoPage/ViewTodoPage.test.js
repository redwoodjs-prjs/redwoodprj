import { render } from '@redwoodjs/testing'

import ViewTodoPage from './ViewTodoPage'

describe('ViewTodoPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ViewTodoPage id="42" />)
    }).not.toThrow()
  })
})
