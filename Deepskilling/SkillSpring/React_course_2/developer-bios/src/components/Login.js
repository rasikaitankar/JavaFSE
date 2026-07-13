import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AuthContext from '../contexts/Auth';

function Login() {
    const { loginUser } = useContext(AuthContext);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();


    const handleLogin = () => {
        loginUser(JSON.stringify({ email, password }));
        navigate("/")
    }
        

    return (
        <div className="container">
            <h1>Log in with your credentials</h1>
            <div className="row">
                <div className="col-mid-6">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" data-testid="email" name="email" className="form-control" onChange={ (e) => setEmail(e.target.value) } />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" data-testid="password" name="password"  className="form-control" onChange={ (e) => setPassword(e.target.value) } />
                    </div>
                    <button onClick={ handleLogin } >Login</button>
                  
                </div>
            </div>
        </div>
    
    );
}

export default Login;