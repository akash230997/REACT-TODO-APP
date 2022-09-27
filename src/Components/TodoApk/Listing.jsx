import React from 'react';
// import Todo from './Todo';

export default function Listing(props) {
  return (
      <li>
      <i className="fas fa-window-close" onClick={()=>{
          props.deleteFunc(props.id)
      }}></i> {props.store}</li>
  )
}
