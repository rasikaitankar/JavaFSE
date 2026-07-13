import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DeveloperBio from "./DeveloperBio";
import { getAllBiosRequest } from "../reducers/devBiosReducers";

function DisplayBios() {
  const { developers, getResult } = useSelector((state) => state.devBios);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBiosRequest());
  }, []);

  return (
    <>
      {
        developers 
        ? 
          developers.map((dev) => <DeveloperBio key={dev.id} developer={dev} />)
        : 
          <></>
      }
      <div >{getResult}</div>
    </> 
  )
}

export default DisplayBios;
