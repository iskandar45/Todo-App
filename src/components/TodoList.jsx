import React, { useContext } from "react"
import { TodoContext } from "../pages/Home"
// import { TodoContext } from "../contexts/TodoContext"

export default function TodoList() {
  const { todos } = useContext(TodoContext)

  return (
    <>
      <h4>Todo</h4>
      <ul>
        {todos.length <= 0 ? (
          <p className="empty-todo">No Todos</p>
        ) : (
          todos.map((item, i) => <li key={i}>{item.title}</li>)
        )}
      </ul>
    </>
  )
}
