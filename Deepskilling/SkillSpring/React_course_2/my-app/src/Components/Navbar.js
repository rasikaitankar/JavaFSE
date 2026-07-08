import logo from '../logo.svg';
import './App.css';
import DisplayBios from './DisplayBios';
import AuthContext from '../Context/index';
import { useContext } from 'react';
import {Link} from 'react-router-dom';
function Navbar(){
    const {isLoggedIn,setIsLoggedIn} = useContext(AuthContext);

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                <img className="brand" src={logo} alt="logo"/>
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
                {
                    isLoggedIn
                    ?
                     <>
                     <li className="nav-item">
                        <Link to="/developers/add" className="nav-link">Create Bio</Link>
                     </li>
                     <li className="nav-item">
                        <Link to="/" className="nav-link" onClick={() =>setIsLoggedIn(false)}>Logout</Link>
                     </li>
                         </>
                    :
                        <li className="nav-item">
                        <Link to="/login" className="nav-link">Login</Link>
                     </li>
                }
            </ul>
        </nav>
    );
}

export default Navbar;