import React, { useState, useEffect } from 'react';
import { useParams , useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import DeveloperForm from './DeveloperForm';
import { putDeveloper } from '../apiCalls/devAPI';
import PropTypes from 'prop-types';
import devActions from '../reducers/devBiosReducers';
import { useSelector } from 'react-redux';


function EditDeveloper() {
    const developers = useSelector(state=>state.devBios.developers);
    const navigate = useNavigate();
    const { id } = useParams();
    const [ developer, setDeveloper ] = useState();

    useEffect(()=>{
        setDeveloper(developers.find(dev=>dev.id==id))
    },[]);

    const handleSubmit = (dev) => {
        putDeveloper(dev)
        .then(() => navigate("/developers"))
        .catch(error => console.log(error));
    }

    return(
        developer
        ?
            <DeveloperForm 
                title="Edit"
                developer={developer}
                handleSubmit={handleSubmit}
            />
        :
            <div></div>
    );

}


EditDeveloper.propTypes = {
    developers: PropTypes.array,
    getAllBiosRequestActionCreator: PropTypes.func
}

export default connect(({developers}) => ({
    developers
}),{
    getAllBiosRequestActionCreator: devActions.getAllBiosRequestActionCreator
})(EditDeveloper);