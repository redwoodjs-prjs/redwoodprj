import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
/*export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}
*/
export const todos = () => {
  return db.todo.findMany()
}

export const todo = ({ id }) => {
  return db.todo.findFirst({ where: { id } })
}

export const createTodo = ({ request }) => {
  return db.todo.create({
    data: request,
  })
}

export const updateTodo = ({ request }) => {
  return db.todo.update({
    where: {
      id: request?.id
    },
    data: {
      name: request?.name,
      done: request?.done
    }
  })
}

export const deleteTodo = ({ request }) => {
  //console.log("ID:", request?.id)
  return db.todo.delete({ where: { id } })
}
