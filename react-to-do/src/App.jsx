import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { task: "hello", id: Math.floor(Math.random() * 1000) + 1 },
  ]);
  const [input, setInput] = useState("");

  const handleInput = (e) => setInput(e.target.value);
  const addTask = () => {
    setTasks((prev) => [
      ...prev,
      { task: input, id: Math.floor(Math.random() * 1000) + 1 },
    ]);
    setInput("");
  };
  const removeTask = (id) =>
    setTasks((prev) => prev.filter((item) => item.id !== id));

  return (
    <>
      <h1>ToDo List</h1>
      <span>
        <input
          type="text"
          placeholder="Enter a task to be added"
          value={input}
          onChange={handleInput}
        />
        <button onClick={addTask}>Add Task</button>
      </span>
      <ol>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.task}{" "}
            <button onClick={() => removeTask(task.id)}>Remove Task</button>
          </li>
        ))}
      </ol>
    </>
  );
}

export default App;
