import { useMutation } from '@redwoodjs/web'
import { useRef, useState } from 'react'

const ADD_TODO = gql`
  mutation CreateTodoMutation($input: CreateTodoInput) {
    createTodo(request: $input) {
      id
      name
      done
    }
  }
`
const AddTodo = ({closeModal}) => {
  const [disable, setDisable] = useState(false)
  const formRef = useRef()
  const [createTodo] = useMutation(ADD_TODO, {
    onCompleted: () => {
      window.location.reload()
    },
  })
  function addTodo(params) {
    const { todoName } = formRef.current
    const name = todoName.value
    createTodo({
      variables: {
        input: {
          done: false,
          name,
        },
      },
    })
    window.location.reload()
  }

  return (
    <div className="modal">
      <div className="modal-backdrop" onClick={() => closeModal()}></div>
      <div className="modal-content">
        <div className="modal-header">
          <h3>Add Todo</h3>
          <span
            style={{ padding: '10px', cursor: 'pointer' }}
            onClick={() => closeModal()}
          >
            X
          </span>
        </div>
        <div className="modal-body content">
          <form ref={formRef}>
            <div style={{ display: 'flex', margin: '2px 2px 0 0' }}>
              <div
                style={{ flex: '1 1 100%', margin: '0 0 2px 5px' }}
                className="inputField"
              >
                <div className="label">
                  <label>Name</label>
                </div>
                <div>
                  <input
                    name="todoName"
                    type="text"
                    placeholder="What do you want todo next?"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button
            className="btn-danger"
            style={{ marginLeft: '0' }}
            onClick={() => closeModal()}
          >
            Cancel
          </button>
          <button disabled={disable} className="btn" onClick={() => addTodo()}>
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddTodo
