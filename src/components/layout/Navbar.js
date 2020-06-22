import React from 'react'
import { Nav} from 'react-bootstrap';
import { NavLink, Link } from "react-router-dom";

// this.state={
//     isOpen:false
// }

// handleClick=() =>{

//     this.setState({

//         isOpen:!this.state.isOpen,
//     })
// }

export const Navbar = () => {
    
    return (
        
        <div>

            { <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button ss className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/services">Services</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>

                    </ul>

                </div>
            </nav> }

            
        </div>
    );
}

export default Navbar;