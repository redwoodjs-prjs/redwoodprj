export const schema = gql`
  type Todo {
    id: Int!
    name: String
    done: Boolean!
  }

  type Query {
    todos: [Todo!]!
    todo(id: Int!): Todo
  }

  type Mutation {
    createTodo(request: CreateTodoInput): Todo
    updateTodo(request: UpdateTodoInput): Todo
    deleteTodo(request: DeleteTodoInput): Todo
  }

  input CreateTodoInput {
    name: String
    done: Boolean!
  }

  input UpdateTodoInput {
    id:   Int!
    name: String
    done: Boolean
  }

  input DeleteTodoInput {
    id: Int!
  }
`
