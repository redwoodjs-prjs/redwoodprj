import { Link, routes } from '@redwoodjs/router'

function randColors() {
  const colors = ['red', 'purple', 'blue', 'green', 'yellow']
  return colors[Math.floor(Math.random() * colors.length)]
}

const TodoCard = ({ todo }) => {
  return (
    <Link to={routes.viewTodo({ id: todo?.id })}>
      <div
        style={{
          borderLeft: `2px solid ${randColors()}`,
          borderRadius: '3px',
          padding: '10px',
          margin: '3px',
          marginTop: '15px',
          cursor: 'pointer',
        }}
      >
        <span style={{ display: 'block', margin: '4px', marginBottom: '4px', paddingBottom:"10px" }}>
          What to do: <b>{todo?.name}</b>
        </span>
        <span style={{ display: 'block' }}>
          <span>Status</span>:
          <span
            style={{
              backgroundColor: `${todo?.done ? 'blue' : 'red'}`,
              color: 'white',
              padding: '4px',
              borderRadius: '10px',
            }}
          >
            {todo?.done ? 'Completed' : 'In-complete'}
          </span>
        </span>
      </div>
    </Link>
  )
}

export default TodoCard
