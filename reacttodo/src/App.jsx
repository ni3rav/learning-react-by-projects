// TODO: Add updation Feature
// TODO: Apply DaisyUI

import React, { useState } from "react";
import '../src/index.css';

function App() {
  const [newItem, setNewItem] = useState("");
  const [list, updateList] = useState([]);

  const handleChanges = (event) => {
    setNewItem(event.target.value);
  };

  const addNewtask = () => {
    if (!newItem) {
      alert("please enter a task");
      return;
    }
    updateList((prevList) => [...prevList, newItem]);
    setNewItem("");
  };

  const removeTask = (i) => {
    updateList((prevList) => {
      const updatedList = [...list];
      updatedList.splice(i, 1);
      return updatedList;
    });
  };

  return (
    <>
      <h1>ToDO</h1>

      <input
        type="text"
        placeholder="enter a task"
        value={newItem}
        onChange={handleChanges}
      />
      <button onClick={addNewtask}>Add</button>

      <ol>
        {list.map((listItem, i) => {
          return (
              <li key={i} contentEditable className="todo">
                {listItem} &nbsp;{" "}
              <button onClick={() => removeTask(i)}>❌</button>
              </li>
          );
        })}
      </ol>
    </>
  );
}

export default App;
