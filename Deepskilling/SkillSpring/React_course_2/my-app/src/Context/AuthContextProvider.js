import React,{useState} from 'react';
import AuthContext from '.';
import PropTypes from 'prop-types';

const AuthContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const context = {
        isLoggedIn,
        setIsLoggedIn
    };

    return(
        <AuthContext.Provider value ={context}>
            {children}
        </AuthContext.Provider>
    );
}
AuthContextProvider.propTypes = {
    children: PropTypes.object
}
export default AuthContextProvider;