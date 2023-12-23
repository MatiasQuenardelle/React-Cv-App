import { useState } from "react"

export function TodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (newItem === "") return
    onSubmit(newItem)
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="todo">What would you want to do ?</label>
      <input
        value={newItem}
        type="text"
        name="todo"
        id="todo"
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button>Add</button>
    </form>
  )
}
