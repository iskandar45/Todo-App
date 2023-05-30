export default function Form({ onSubmit, todo, setTodo }) {
  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={todo} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  )
}
