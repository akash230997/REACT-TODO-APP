import React from 'react'

export default function List(props) {
    
  return (
    <li>
      <i className="fas fa-window-close" onClick={()=>{
        props.deleteTask(props.id);                 //Method for Selecting accurate list value by ID
      }}></i>
      {props.value}
    </li>
  );
}
