import React  from "react";
import { Link } from "react-router-dom";



const NavBar = () => {

    return (
        <nav className="navbar">
            <h3>
                <Link to="/">Yassification</Link>
            </h3>
            <div className="navbar-links">
                <Link to="/signup" className="navbar-link">Sign Up</Link>
                <Link to="/login" className="navbar-link">login</Link>
            </div>
            
        </nav>
    )
}
export default NavBar;