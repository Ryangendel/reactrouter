import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {useState, useEffect} from "react"
import About from "./pages/about"
import Home from "./pages/home"
import Skis from "./pages/skis"
import Header from "./components/header"

function App() {

  const [dogName, setDogName] = useState("Skadi")

  useEffect(()=>{
    setDogName("Odie")
  },[])

  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route 
            path="/about"
            element={<About dogName={dogName} changeName={setDogName}/>}
          />
           <Route 
            path="/home"
            element={<Home />}
          />
           <Route 
            path="/ski"
            element={<Skis />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
