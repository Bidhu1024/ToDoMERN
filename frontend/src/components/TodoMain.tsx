import React, { useState } from "react";
import "../App.css";
import Todos from "./Todos";
const TodoMain = () => {
  const [text, setText] = useState<string>("");
  return (
    <>
      <div className="container">
        <div className="flex flex-col items-center">
          <h1 className="text-main">Todo X MERN</h1>
          <input
            value={text}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setText(e.target.value)
            }
            type="text"
            id="default-input"
            className="todo-input"
          />
          <div className="todo-button">
            {" "}
            <button>Create</button>
          </div>
        </div>
      </div>
      <div className="todo-display">
        <Todos />
      </div>
    </>
  );
};

export default TodoMain;
