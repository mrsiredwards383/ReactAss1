import React from 'react';

function UserOutput(props) {

    return (
    <div>
    <p onClick={props.click}> {props.name} {props.age}</p>
    </div>
    ) 
  };
  
  export default UserOutput;