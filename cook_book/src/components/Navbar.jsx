import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"

export const Navbar = () => {
return (
    <nav>
      <h1>Cook Book </h1>
     <ul>
       <li><Link to="/">Home</Link></li>
       <li><Link to="/newrecipe">New Recipe</Link></li>
       <li><Link to="/login">Login/Register</Link></li>
     </ul>
    </nav>
   );
}

export default Navbar
