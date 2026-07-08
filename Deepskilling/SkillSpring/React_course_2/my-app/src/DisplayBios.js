
//import DeveloperBios from "./DeveloperBios";
import React from 'react';
import Developer from "./Developer";
//import PropTypes from "prop-types";
class DisplayBios extends React.Component{

    constructor(props){
        super(props);
        this.state={
            developers:[
                new Developer(1,"Rasika","Itankar","Java",2021),
                new Developer(2,"Riya","Patel","Python",2022)
            ]
        }
    }
    render() {
        console.log(this.props.developers);
        return (
            <div>
                <h2>Developers</h2>
                {this.props.developers.map(dev => (
                    <div key={dev.id}>
                        <h3>{dev.firstName} {dev.lastName}</h3>
                        <p>Favorite Language : {dev.favLang}</p>
                        <p>Start Year : {dev.startYear}</p>
                        <hr />
                    </div>
                ))}

            </div>
        );
    }

}
export default DisplayBios;