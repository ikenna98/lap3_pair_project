import { Welcome, Github } from "./pages";
import { Routes, Route } from 'react-router-dom';
import { NavBar } from "./components";


function App() {
  return (
    <div id="App">
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<Welcome />} />
          <Route path="search" element={<Github />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
