import { render } from '@redwoodjs/testing'

import TodoCard from './TodoCard'

describe('TodoCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TodoCard />)
    }).not.toThrow()
  })
})
