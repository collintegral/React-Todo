import { useState } from "react";

export default function App() {

  const [newItem, setNewItem] = useState("");
  const [todo, setTodo] = useState([]);

  function handleSubmit(e) {
    e.preventDefault()

    setTodo((currentTodo) => {
      return [...currentTodo, { id: crypto.randomUUID(), title: newItem, completed: false}]
  });

  setNewItem("")
  }

  function toggleTodo(id, completed) {
    setTodo(currentTodo => {
      return (currentTodo.map(todo => {
        if (todo.id === id) {
          return {...todo, completed}
        }
      }))
    })
  }

  function deleteTodo(id) {
    setTodo(currentTodo => {
      return currentTodo.filter(todo => {
        todo.id !== id
      })
    })
  }

  return (
    <>
    <form className="new-item-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>New Item
          <input type='text' id='item' value={newItem} onChange={e = setNewItem(e.target.value)}/>
        </label>
        <button class="btn" >Add Item</button>
      </div>
    </form>
    <h1 className="header">To-Do List</h1>
    <ul className="list">
      {todo.length === 0 && "Nothing To Do"}
      {todo.map(todo => {
        return (
          <li key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)}/>{todo.title}
            </label>
            <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        )
      })}
      </ul> 
  </>
  )
}