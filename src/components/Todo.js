import React, { useState } from "react";

const Todo = () => {
  const [todoItem, setTodoItem] = useState("");
  const [todoItems, setTodoItems] = useState([]);

  function handleAddTodo() {
    if (todoItem.trim() === "") {
      alert("cant add empty item to list");
    } else {
      setTodoItems([...todoItems, todoItem]);
      
    }
  }

  function handleDelete(id) {
    setTodoItems(todoItems.filter((_, index) => id !== index));
  }

  return (
    <div>
      <div className="input-container">
        <input
          onChange={(e) => setTodoItem(e.target.value)}
          type="text"
          placeholder="Add Todo Item"
        ></input>
        <button className="add-btn" onClick={handleAddTodo}>
          Add Todo
        </button>
      </div>
      <div className="todoContainer">
        {todoItems.map((item, idx) => {
          return (
            <li className="todo-item"
             key={idx}>
              <div><span>{item}</span>{" "}</div>
              <div><button className="delete-btn" onClick={() => handleDelete(idx)}>
                Delete
              </button></div>
              
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
