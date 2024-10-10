
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/home";



function App() {
  return (
    <>
    <Routes>
       <Route path="/" element={<Home/>} />
    </Routes>
    </>
  );
}

export default App;



