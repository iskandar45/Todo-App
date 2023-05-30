import React, { useContext } from "react"
import { TodoContext } from "../contexts/todoContext"
import Button from "./Button"
import { actions } from "../store/actions"

export default function TodoList() {
  const { todos, dispatch } = useContext(TodoContext)

  const handleDelete = (todoId) => {
    dispatch({ type: actions.deleteTodo, payload: todoId })
  }

  const handleToggle = (todoId) => {
    dispatch({ type: actions.toggleTodo, payload: todoId })
  }

  console.log(todos)

  return (
    <>
      <h4>Todo</h4>
      <ul>
        {todos.length <= 0 ? (
          <p className="empty-todo">No Todos</p>
        ) : (
          todos.map((item, i) => (
            <li key={i} onClick={() => handleToggle(item.id)}>
              <div
                style={
                  item.completed
                    ? { color: "red", fontStyle: "italic", textDecoration: "line-through" }
                    : null
                }
              >
                {item.title}
              </div>
              <div>
                <Button
                  style={
                    item.completed ? { backgroundColor: "#1c871b" } : { backgroundColor: "#5d5dbd" }
                  }
                >
                  {item.completed ? "Done" : "Not Done"}
                </Button>
                <Button onClick={() => handleDelete(item.id)}>Delete</Button>
              </div>
            </li>
          ))
        )}
      </ul>
    </>
  )
}
