import react from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Home from "../src/Home/Home.jsx"
import SobreNosotros from "../src/components/SobreNosotros/SobreNosotros.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
         <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<SobreNosotros />} />
         </Routes>
     </div>
    </BrowserRouter>
  )
}

export default App
