import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/book">Books</Link>
          </li>
          <li>
            <Link to="/music">Music</Link>
          </li>
          <li>
            <Link to="/movie">Movie</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Home</h1>}></Route>
        <Route path="/book" element={<h1>Books List</h1>}></Route>
        <Route path="/music" element={<h1>Songs List</h1>}></Route>
        <Route path="/movie" element={<h1>Movies List</h1>}></Route>
      </Routes>
    </>
  );
}

export default App;
