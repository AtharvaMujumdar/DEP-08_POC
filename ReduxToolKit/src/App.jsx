import React from "react"
import Home from "./Home"
import Workout from "./Workout"
import {BrowserRouter , Routes, Route} from "react-router-dom"

function App() {
 

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/workout" element={<Workout/>}/>
      </Routes>
    </BrowserRouter>

      
    </>
  )
}

export default App
