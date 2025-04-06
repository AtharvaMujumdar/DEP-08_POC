import './App.css'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import Users from "./Users";
import React from "react";
import UserDetails from "./UserDetails";

function App() {
  

  return (
    <>
      <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/users">Users</Link>
          </li>
          
        </ul>
      </div>
      <Routes>
        <Route path="/users" Component={Users} />
        <Route path="/users/:id" Component={UserDetails}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
