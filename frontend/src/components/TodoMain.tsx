import React, { useState } from "react";

const TodoMain = () => {
  const [text, setText] = useState<string>("");
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center w-full">
      <h1 className="text-4xl font-bold text-blue-500 flex text-center w-full justify-center">
        Todo X MERN
      </h1>

      <div className="mb-6 flex justify-center align-middle">
        <input
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setText(e.target.value)
          }
          type="text"
          id="default-input"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    </div>
  );
};

export default TodoMain;
