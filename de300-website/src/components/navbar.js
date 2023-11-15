import React  from "react";
import { Link } from "react-router-dom";



const NavBar = () => {

    return (
        <nav className="navbar">
            <h3>
                <Link to="/">Deaf Misconceptions / Info Posters</Link>
            </h3>
            <div className="navbar-links">
                <Link to="/about" className="navbar-link">About Us</Link>
                <Link to="/sources" className="navbar-link">Learn More</Link>
            </div>
            
        </nav>
    )
}
export default NavBar;