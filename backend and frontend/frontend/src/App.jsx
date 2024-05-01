import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:1812/api/jokes").then((res) => {
      setJokes(res.data);
    });
  });

  return (
    <>
      <h1>Jokes: {jokes.length}</h1>
      <ul>
        {jokes.map((joke, id) => {
          <li key={id}>{joke.joke}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
