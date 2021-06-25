import { useState } from 'react'
import styles from './../../Home.module.css'
import { useMutation } from '@redwoodjs/web'
import EditTodo from 'src/components/EditTodo'
import { navigate, routes } from '@redwoodjs/router'

const DELETE_TODO = gql`
  mutation DeleteTodoMutation($input: DeleteTodoInput) {
    deleteTodo(request: $input) {
      id
      name
      done
    }
  }
`

const ViewTodo = ({ todo }) => {
  const [showEditModal, setShowEditModal] = useState(false)
  const [deleteTodo] = useMutation(DELETE_TODO, {
    onCompleted: () => {
      navigate(routes.todo())
    },
  })

  function deleteTodoFn() {
    if (window.confirm('Do you want to delete this item?')) {
      //
      deleteTodo({
        variables: {
          input: {
            id: parseInt(todo?.id),
          },
        },
      })
    }
  }
  return (
    <div className={styles.container}>
      <head>
        <title>Todo app</title>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <main className={styles.main}>
        <div className={styles.breadcrumb}>
          <div>
            <span style={{ margin: '1px' }}>
              <button onClick={() => navigate(routes.todo())}>Go to Todos</button>
            </span>
          </div>
        </div>

        <div className={styles.accountcontainer}>
          <div className={styles.youraccounts}>
            <h3>View Todo</h3>
          </div>
          <div>
            <div>Todo</div>
            <div>
              <h2>{todo?.name}</h2>
            </div>
            <div>Status: {todo?.done ? 'Completed' : 'In-complete'}</div>
          </div>
          <div style={{ padding: '15px 0' }}>
            <span>
              <button
                onClick={() => setShowEditModal((pV) => !pV)}
                style={{ marginLeft: '0', marginRight: '2px' }}
                className="btn"
              >
                Edit
              </button>
              <button onClick={deleteTodoFn} className="btn btn-danger">
                Delete
              </button>
            </span>
          </div>
          {showEditModal ? <EditTodo todo={todo} closeModal={()=>setShowEditModal(false)} /> : null}
        </div>
      </main>
    </div>
  )
}

export default ViewTodo
