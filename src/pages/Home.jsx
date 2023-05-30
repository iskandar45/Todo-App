import React, { useReducer } from "react"
import Form from "../components/molecules/Form"
import TodoList from "../components/molecules/TodoList"
import { TodoContext } from "../contexts/todoContext"
import { todoReducer } from "../store/reducer"
import { state } from "../store/initialState"

export default function Home() {
  const [todos, dispatch] = useReducer(todoReducer, state)

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
