export function TodoItem({ id, title, deleteTodo }) {
  return (
    <li key={id}>
      {title} <button onClick={() => deleteTodo(id)}>Delete</button>
    </li>
  )
}
