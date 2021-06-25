import styles from './../../Home.module.css'
import TodosCells from 'src/components/TodosCell'
import { useState } from 'react'
import AddTodo from 'src/components/AddTodo'

const TodoPage = () => {
  const [showAddTodo, setShowAddTodo] = useState(false)
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
              <button onClick={() => setShowAddTodo(true)}>Add Todo</button>
            </span>
          </div>
        </div>

        <div className={styles.accountcontainer}>
          <div className={styles.youraccounts}>
            <h3>Todos</h3>
          </div>
          <div>
            <TodosCells />
          </div>
        </div>
        {showAddTodo ? <AddTodo closeModal={()=> setShowAddTodo(false)} /> : null}
      </main>
    </div>
  )
}

export default TodoPage
