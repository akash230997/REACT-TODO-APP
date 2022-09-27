import React, { useState } from 'react';
import '../TodoApk/Todo.css'
import Ultest from './Ultest';

export default function Testing() {
    const [task,setTask] = useState("");
    const [valStore, setvalStore] = useState([]);
    
    const typeVal = (event) =>{
        setTask(event.target.value);
    }

    const Add = () =>{
        setvalStore((PreviousElem)=>{
            // console.log(PreviousElem)
            return [...PreviousElem, task   ] 
        })
        setTask("")
    }

    const deleted = (id) =>{
        console.log(id);
        console.log('clicked');

        setvalStore((preVal)=>{
            return preVal.filter((currElem,index)=>{
                return index !== id;
            });
        });
    }
  return (
    <div>
          <div className='main'>
              <div className="box">
                  <h1 style={{ marginTop: '20px' }} className='heading'>TODO LIST</h1>
                  <div className='portion'>
                      <input type="text" onChange={typeVal} maxLength="8" value={task} className='askList' placeholder='Add Your Task Here' />
                      <span> <i className="fas fa-plus-circle" onClick={Add}></i> </span>
                  </div>
                  <ul className='list'>
                      {valStore.map((currElem,index)=>{
                          return <Ultest key={index} id={index} deleteitem={deleted} task={currElem}/>
                      })}
                      {/* <li><i className="fas fa-window-close"></i> {valStore}</li> */}
                  </ul>
              </div>
          </div>
    </div>
  )
}
