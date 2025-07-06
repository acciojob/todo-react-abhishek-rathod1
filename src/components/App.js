
import React from "react";
import './../styles/App.css';
import Todo from "./Todo";
import './Style.css'

const App = () => {
  return (
    <div className="container">
        {/* Do not remove the main div */}
        <h1>Todo App</h1>
        <Todo/>
    </div>
  )
}

export default App
