import ViewTodo from "src/components/ViewTodo"

export const beforeQuery = ({ id }) => ({
  variables: { id: parseInt(id) },
})

export const QUERY = gql`
  query FindTodoQuery($id: Int!) {
    todo: todo(id: $id) {
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

export const Success = ({ todo }) => {
  return <ViewTodo todo={todo} />
}
