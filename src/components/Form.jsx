import React, { useContext } from "react"
import { TodoContext } from "../contexts/todoContext"

export default function Form() {
  const { dispatch } = useContext(TodoContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTodo = {
      id: Date.now(),
      title: e.target[0].value,
    }
    dispatch({ type: "ADD_TODO", payload: newTodo })
    e.target[0].value = ""
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button type="submit">Submit</button>
    </form>
  )
}
