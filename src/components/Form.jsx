import React, { useContext } from "react"
import { TodoContext } from "../contexts/todoContext"

export default function Form() {
  const { data, setData, addTodo } = useContext(TodoContext)

  const handleChange = (e) => {
    setData(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo()
    setData("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={data} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  )
}
