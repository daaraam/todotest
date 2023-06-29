import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);

  const textChangeHandler = (event) => {
    setText(event.target.value);
  };

  const addBtnHandler = (event) => {
    event.preventDefault();
    const newTodo = {
      id: todo.length + 1,
      content: text,
    };
    setTodo([...todo, newTodo]);
    setText("");
  };

  return (
    <div className="layout">
      <div className="input-container">
        <form className="input-form">
          <input type="text" onChange={textChangeHandler} value={text} />
          <button onClick={addBtnHandler}>추가하기</button>
        </form>
        <h2 className="title">Todo List</h2>
      </div>

      <div className="todo-container">
        {todo.map((item) => (
          <div className="todo-box">
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
