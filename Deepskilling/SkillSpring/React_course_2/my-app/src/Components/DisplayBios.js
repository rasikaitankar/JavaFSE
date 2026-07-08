
//import DeveloperBios from "./DeveloperBios";
import React, { useContext, useEffect } from 'react';
import Developer from "./Developer";
import AuthContext from '../Context';
import DeveloperBios from './DeveloperBios';
import PropTypes from 'prop-types';
import devActions from '../reducers/devReducers';
//import PropTypes from "prop-types";

function DisplayBios(props){
    const { isAdmin }= useContext(AuthContext);

    useEffect (() =>{
        props.addDevsToStore();
    },[]);

    return(
        props.developers
        ?
            props.developers.map(dev => <DeveloperBios develope={dev} key={dev.id} isAdmin={isAdmin}/>)
        :
        <div></div>
    );
}

DisplayBios.propTypes = {
    developers:PropTypes.array,
    addDevsToStore:PropTypes.func
}

export default connect(({developers,myOtherStuff}) => ({
    developers:developers,
    message:myOtherStuff
}),{
    addDevsToStore: devActions.getAllBiosActionCreator
})(DisplayBios);

//till hooks and usestate,useeffect
// class DisplayBios extends React.Component{

//     constructor(props){
//         super(props);
//         this.state={
//             developers:[
//                 new Developer(1,"Rasika","Itankar","Java",2021),
//                 new Developer(2,"Riya","Patel","Python",2022)
//             ]
//         }
//     }
//     render() {
//         console.log(this.props.developers);
//         return (
//             <div>
//                 <h2>Developers</h2>
//                 {this.props.developers.map(dev => (
//                     <div key={dev.id}>
//                         <h3>{dev.firstName} {dev.lastName}</h3>
//                         <p>Favorite Language : {dev.favLang}</p>
//                         <p>Start Year : {dev.startYear}</p>
//                         <hr />
//                     </div>
//                 ))}

//             </div>
//         );
//     }

// }
export default DisplayBios;