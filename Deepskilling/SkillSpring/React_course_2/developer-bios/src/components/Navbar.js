import React, { useContext } from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import AuthContext from '../contexts/Auth';
import { ADD_DEVELOPER_ROUTE, DEVELOPER_BIOS_ROUTE, HOME_ROUTE, LOGIN_ROUTE, SEARCH_DEVELOPERS_ROUTE } from '../utils/constants';

function Navbar() {
    const { isLoggedIn, logoutUser } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-between">
        <Link className="navbar-brand" to={HOME_ROUTE}>
            <img className="brand" src={logo} alt='logo' /> 
        </Link>
  
        <ul className="navbar-nav right-margin">
            <li className="nav-item">
                <Link to={HOME_ROUTE} className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
                <Link to={DEVELOPER_BIOS_ROUTE} className="nav-link">Developer Bios</Link>
            </li>
            <li className="nav-item">
                <Link to={SEARCH_DEVELOPERS_ROUTE} className="nav-link">Search Bios</Link>
            </li>
            {
                isLoggedIn
                ?
                    <>
                        <li className="nav-item">
                            <Link to={ADD_DEVELOPER_ROUTE} className="nav-link">Create Bio</Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to={HOME_ROUTE} 
                                className="nav-link" 
                                onClick={()=> { 
                                logoutUser();
                            }}>Logout</Link>
                        </li>
                    </>
                :
                    <li className="nav-item">
                        <Link to={LOGIN_ROUTE} className="nav-link">Login</Link>
                    </li>
            }
        </ul>
    </nav>
  );
}

export default Navbar;