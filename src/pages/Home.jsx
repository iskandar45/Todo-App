import { useState } from "react"
import Form from "../components/Form"
import TodoList from "../components/TodoList"

export default function Home() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    const newTodo = {
      id: Date.now(),
      title: event.target[0].value,
    }

    setTodos([...todos, newTodo])
    event.target[0].value = ""
    setTodo("")
  }

  return (
    <>
      <div className="container">
        <h4>Todo App</h4>
        <Form onSubmit={handleSubmit} todo={todo} setTodo={setTodo} />
        <hr />
        <TodoList items={todos} />
      </div>
    </>
  )
}
