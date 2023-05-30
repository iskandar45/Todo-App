import React from "react"

export default function TodoList({ items }) {
  return (
    <>
      <h4>Todo</h4>
      <ul>
        {items.length <= 0 ? (
          <p className="empty-todo">No Todos</p>
        ) : (
          items.map((item, i) => <li key={i}>{item.title}</li>)
        )}
      </ul>
    </>
  )
}
