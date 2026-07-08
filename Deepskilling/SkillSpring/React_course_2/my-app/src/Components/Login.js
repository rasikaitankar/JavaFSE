import React,{useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import AuthContext from '../Context/index';

function Login(){
    const {setIsLoggedIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogin = () => {
        setIsLoggedIn(true);
        navigate("/");
    }

    return(
        <div className="container mt-5">
            <h2>Login</h2>
            <button className='btn btn-primary'
            onClick={handleLogin}>
                Login
            </button>
        </div>
    );
}

export default Login;