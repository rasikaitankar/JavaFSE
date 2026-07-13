import React, { useState, useEffect } from 'react';
import AuthContext from '.';
import PropTypes from 'prop-types';



const AuthContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginUser = (user) => {
        sessionStorage.setItem('user', JSON.stringify(user));
        setIsLoggedIn(true);
    }

    const logoutUser = () => {
        sessionStorage.removeItem('user');
        setIsLoggedIn(false);
    }

    const getUser = () => {
        let user = sessionStorage.getItem('user');
        return user;
    }

    const context = {
        isLoggedIn,
        loginUser,
        getUser,
        logoutUser
    };
    
    useEffect(()=>{
        let user = getUser();
        if(user){
            setIsLoggedIn(true);
        }
    },[])


    return(
        <AuthContext.Provider value={context}>
            { children }
        </AuthContext.Provider>
    );
}

AuthContextProvider.propTypes = {
    children: PropTypes.object
}

export default AuthContextProvider;