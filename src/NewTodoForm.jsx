import { useState } from "react";

export function NewTodoForm({ onSubmit }) {
    const [newItem, setNewItem] = useState("");

    function handleSubmit(e) {
        e.preventDefault()

        if (newItem === "") { return }
        onSubmit(newItem)
        setNewItem("")
    }

    return (
    <form className="new-item-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>New Item
          <input type='text' id='item' value={newItem} onChange={e => setNewItem(e.target.value)}/>
        </label>
        <button className="btn" >Add Item</button>
      </div>
    </form>
    )
}