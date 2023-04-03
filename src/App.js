import { Routes , Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SingUp from "./Pages/SingUp/SingUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login"  element={<Login/>} />
        <Route path="/singup" element={<SingUp/>} />
      </Routes>
    </div>
  );
}


export default App;
