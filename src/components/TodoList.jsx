import React, { useContext } from "react"
import { TodoContext } from "../contexts/todoContext"
import Button from "./Button"
import { actions } from "../store/actions"

export default function TodoList() {
  const { todos, dispatch } = useContext(TodoContext)

  const handleDelete = (todoId) => {
    dispatch({ type: actions.deleteTodo, payload: todoId })
  }

  return (
    <>
      <h4>Todo</h4>
      <ul>
        {todos.length <= 0 ? (
          <p className="empty-todo">No Todos</p>
        ) : (
          todos.map((item, i) => {
            return (
              <li key={i}>
                <div>{item.title}</div>
                <div>
                  <Button onClick={() => handleDelete(item.id)}>Delete</Button>
                </div>
              </li>
            )
          })
        )}
      </ul>
    </>
  )
}
