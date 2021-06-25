import { useMutation } from '@redwoodjs/web'
import { useRef, useState } from 'react'

const UPDATE_TODO = gql`
  mutation UpdateTodoMutation($input: UpdateTodoInput) {
    updateTodo(request: $input) {
      id
      name
      done
    }
  }
`
const EditTodo = ({ todo, closeModal }) => {
  const [disable, setDisable] = useState(false)
  const formRef = useRef()

  const [updateTodo] = useMutation(UPDATE_TODO, {
    onCompleted: () => {
      window.location.reload()
      setDisable(false)
    },
  })

  function updateTodoFn() {
    const { todoName, doneStatus } = formRef.current
    const name = todoName.value
    const done = doneStatus.checked

    updateTodo({
      variables: {
        input: {
          id: parseInt(todo?.id),
          name,
          done,
        },
      },
    })
  }
  return (
    <div className="modal">
      <div className="modal-backdrop" onClick={() => closeModal()}></div>
      <div className="modal-content">
        <div className="modal-header">
          <h3>Edit Todo</h3>
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
                    defaultValue={todo?.name}
                  />
                </div>
              </div>
              <div
                style={{ flex: '1 1 100%', margin: '0 0 2px 5px' }}
                className="inputField"
              >
                <div className="label">
                  <label>Status(Done)</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="doneStatus"
                    defaultChecked={todo?.done}
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
          <button
            disabled={disable}
            className="btn"
            onClick={() => updateTodoFn()}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditTodo
