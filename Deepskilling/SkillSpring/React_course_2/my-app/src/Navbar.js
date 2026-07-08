import logo from './logo.svg';
import './App.css';
import DisplayBios from './DisplayBios';

import {Link} from 'react-router-dom';
function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                <img classname="brand" src={logo} alt="logo"/>
            </Link>
         
            <ul className="navbar-nav right-margin">  
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/developers" className="nav-link">Developers Bios</Link>
                </li>
                <li className="nav-item">
                    <Link to="/developers/add" className="nav-link">Add Developer</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;