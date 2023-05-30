import React, { useReducer } from "react"
import Form from "../components/Form"
import TodoList from "../components/TodoList"
import { TodoContext } from "../contexts/todoContext"
import { todoReducer } from "../store/reducer"

export default function Home() {
  const [todos, dispatch] = useReducer(todoReducer, [])

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <div className="container">
        <h4>Todo App</h4>
        <Form />
        <hr />
        <TodoList />
      </div>
    </TodoContext.Provider>
  )
}
