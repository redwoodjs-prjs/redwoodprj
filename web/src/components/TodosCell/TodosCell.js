import TodoCard from "src/components/TodoCard"

export const QUERY = gql`
  query TodosQuery {
    todos {
      id
      name
      done
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ todos }) => {
  return (
    <div>
      {todos.map((item) => {
        return <TodoCard todo={item} key={item.id} />
      })}
    </div>
  )
}
