import React, { useContext } from "react"
import { TodoContext } from "../contexts/todoContext"
import { actions } from "../store/actions"

export default function Form() {
  const { dispatch } = useContext(TodoContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    const value = e.target[0].value
    if (value.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        title: value,
        completed: false,
      }
      dispatch({ type: actions.addTodo, payload: newTodo })
      e.target[0].value = ""
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button type="submit">Submit</button>
    </form>
  )
}
