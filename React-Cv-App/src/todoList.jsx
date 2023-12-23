import { TodoItem } from "./todoItem"

export function TodoList({ todos, deleteTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          id={todo.id}
          key={todo.id}
          title={todo.title}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  )
}
