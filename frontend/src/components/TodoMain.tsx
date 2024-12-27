import React, { useState } from "react";
import "../App.css";
import Todos from "./Todos";
import { createTodo } from "./useCreateTodo";
const TodoMain = () => {
  const [text, setText] = useState<string>("");
  const handleCreateTodo = async () => {
    if (!text.trim()) {
      alert("Please enter a TODO.");
      return;
    }

    try {
      
      const newTodo = await createTodo({ title: text, completed: false });
      console.log("TODO Created:", newTodo);
      setText("");
    } catch (error) {
      console.error("Error creating TODO:", error);
    }
  };
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
            <button onClick={handleCreateTodo}>Create</button>
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
