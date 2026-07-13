import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Developer from '../models/Developer';
import DeveloperForm from './DeveloperForm';
import { POST_SUCCESS, postBioRequest } from '../reducers/devBiosReducers';


function AddDeveloper(){
    const postResult = useSelector((state) => state.devBios.postResult);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if(postResult==POST_SUCCESS){
            navigate('/developers');
        }
    },[postResult]);

    const handleSubmit = (dev) => {
        dispatch(postBioRequest(dev));
    }

    return(
        <>
            <DeveloperForm 
                title="Add New"
                developer={new Developer(null,'','','','')}
                handleSubmit={handleSubmit}
            />
            <div>{postResult}</div>        
        </>
        
    );

}


export default AddDeveloper;