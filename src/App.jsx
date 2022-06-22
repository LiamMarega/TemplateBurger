import react from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Home from "../src/Home/Home.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
         <Routes>
            <Route exact path="/" element={<Home />} />

         </Routes>
     </div>
    </BrowserRouter>
  )
}

export default App
