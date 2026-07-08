import React from "react";
import PropTypes from "prop-types";
function DeveloperBios(props){
    return(
        <div className="card d-inline-block text-dark">
            <div className="card-body">
                <h1 className="card-title">

                </h1>

                <p className="card-text">
                    <span className="bold">Id: {props.developer.id}</span>
                </p>

                <p className="card-text">
                    <span className="bold">First Name: {props.developer.firstName}</span>
                </p>

                <p className="card-text">
                    <span className="bold">Last Name: {props.developer.lastName}</span>
                </p>

                <p className="card-text">
                    <span className="bold">Favorite Language: {props.developer.favLang}</span>
                </p>

                <p className="card-text">
                    <span className="bold">Year Started: {props.developer.startYear}</span>
                </p>
            </div>
        </div>
    );
}

DeveloperBios.propTypes={
    developer:PropTypes.object.isRequired
}

export default DeveloperBios