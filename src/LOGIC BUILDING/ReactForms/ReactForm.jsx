import React, { useState } from 'react';
import './ReactForm.css';

const ReactForm = () => {
    const [val,setVal] = useState("")
    const [show,setShow] = useState();
    const keyP = (event) =>{
        // console.log(event.target.value);
        setVal(event.target.value);
    }
    const Show = () => {
        setShow(val);
    }
    return (
      <div>
        <h1>Hello {show}</h1>
        <input
          type="text"
          placeholder="Write Something Here!!"
          onChange={keyP}
          value={val}               //Single Source Truth
        />
        <button className="btn" type="button" onClick={Show}>
          DONE
        </button>
      </div>
    );
}

export default ReactForm;
