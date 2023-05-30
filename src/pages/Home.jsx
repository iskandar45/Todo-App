import React, { useState, createContext } from "react"
import Form from "../components/Form"
import TodoList from "../components/TodoList"

export const TodoContext = createContext()

export default function Home() {
  const [todos, setTodos] = useState([])
  const [data, setData] = useState("")

  const addTodo = () => {
    setTodos([...todos, { id: Date.now(), title: data }])
  }

  return (
    <TodoContext.Provider value={{ data, setData, addTodo, todos }}>
      <div className="container">
        <h4>Todo App</h4>
        <Form />
        <hr />
        <TodoList />
      </div>
    </TodoContext.Provider>
  )
}
