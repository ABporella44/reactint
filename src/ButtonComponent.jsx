import React from "react";

export const ButtonComponent = (props) => {
    const {handleSomthing,operationType} = props
    console.log(operationType,"hello1")
  return <button onClick={()=>handleSomthing(operationType)}>{operationType}</button>;
};


