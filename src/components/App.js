import React, { useState } from "react";
import './../styles/App.css';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");

  return (
    <div>
      {/* Do not remove the main div */}
      <div>
        <h2>To-DO List</h2>
        <div>
          <input
            value={text}  // Set input value to the text state
            onChange={(e) => {
              setText(e.target.value);
            }}
            type="text"
            placeholder="Add task"
          />
          <button
            onClick={() => {
              if (!text) return;

              const newTodo = {
                task: text,
                id: uuidv4(),
              };

              setTodo([...todo, newTodo]);
              setText("");  // Clear the input field by setting text state to empty
            }}
          >
            Add Todo
          </button>
        </div>
      </div>
      <div>
        <ul>
          {todo.map((item) => {
            return (
              <li style={{ listStyle: "none" }} key={item.id}>
                {item.task}{" "}
                <button
                  onClick={() => {
                    const newTodoList = todo.filter((todoItem) => todoItem.id !== item.id);
                    setTodo(newTodoList);
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
