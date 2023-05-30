import { actions } from "./actions"

export const todoReducer = (state, action) => {
  switch (action.type) {
    case actions.addTodo:
      return [...state, action.payload]
    case actions.deleteTodo:
      return state.filter((todo) => todo.id !== action.payload)
    default:
      return state
  }
}
