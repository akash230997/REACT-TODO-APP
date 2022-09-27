import React, { useState } from 'react';
import '../ReactForms/ReactForm';

const FormSubmitReact = () => {
    const [fname , setFname] = useState("")
    const [name , setname] = useState("")
    const [lname,setLname] = useState("")
    const [lastname,setLastname] = useState("")
    // const [lname , setLname] = useState("")
    const values = (event) =>{
        setFname(event.target.value);
    }
    const done = (pre) =>{
        pre.preventDefault();
        setname(fname);
        setLastname(lname);
    }
    const values2 =(event2) =>{
        setLname(event2.target.value);
    }
    return (
      <div>
        <h1>Hello {name} {lastname}</h1>
        <form action="" onSubmit={done}>
          <input type="text" onChange={values} placeholder="FirstName!!" value={fname} />
          <input type="text" onChange={values2} placeholder="LastName!!" />
          <button className="btn" type="submit">DONE</button>
        </form>
      </div>
    );
}

export default FormSubmitReact;
