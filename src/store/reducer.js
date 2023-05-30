import { actions } from "./actions"

export const todoReducer = (state, action) => {
  switch (action.type) {
    case actions.addTodo:
      return [...state, action.payload]
    case actions.deleteTodo:
      return state.filter((todo) => todo.id !== action.payload)
    case actions.toggleTodo:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      )
    default:
      return state
  }
}
