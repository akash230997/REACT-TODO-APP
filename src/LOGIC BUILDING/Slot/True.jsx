import React from 'react'
import False from './False';
export default function True(props) {
  if (props.A === props.B && props.B === props.C) {
    return (
      <>
        <h1>
          {props.A} {props.B} {props.C}
        </h1>
        <p>THIS IS MATCHING</p>
      </>
    );
  }else{
    <False/>
  }
}

