import { useEffect } from "react"
import { useState } from "react"
import "./todoApp.css"
import { TodoForm } from "./todoForm"
import { TodoList } from "./todoList"

export default function TodoApp() {
  const [todos, setTodos] = useState(() => {
    const saveTodos = localStorage.getItem("todos")
    return saveTodos ? JSON.parse(saveTodos) : []
  })
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  function handleDelete(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id)
    })
  }

  function addTodo(item) {
    if (item !== "") {
      setTodos((currentTodos) => {
        return [
          ...currentTodos,
          { id: crypto.randomUUID(), title: item, completed: false },
        ]
      })
    }
  }

  return (
    <>
      <TodoForm onSubmit={(item) => addTodo(item)} />
      <TodoList todos={todos} deleteTodo={handleDelete} />
    </>
  )
}
