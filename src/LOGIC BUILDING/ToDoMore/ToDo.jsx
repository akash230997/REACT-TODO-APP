import React, {useState} from 'react';
import List from './List';
// import List from './List';
import './todo.css';


export default function ToDo() {
    const [state, setstate] = useState("");
    const [add,setadd] = useState([]);

    const task = (event) => {
      setstate(event.target.value);
    };
    const AddTask = (event) =>{
        setadd((previousValve)=>{
            return [...previousValve,state];
        })
        setstate("");
    }
    const itemdel = (id) =>{
        console.log(id)
        console.log('first')
        setadd((previousVal) => {
          return previousVal.filter((delVal, index) => {
            return index !== id;
          });
        });
    }
  return (
    <div className="outer">
      <div className="todoapp">
        <h1>ToDo Apk</h1>
        <div className="container">
          <input
            type="text"
            onChange={task}
            placeholder="Your Task"
            value={state}
          />
          <span>
            <i className="fas fa-plus-square" onClick={AddTask}></i>
          </span>
        </div>
        <ul>
          {add.map((currVal,index) => {
            return (
              <List
                key={index}
                id={index}
                value={currVal}
                deleteTask={itemdel}
              />
            );
          })}
          {/* <li><i class="fas fa-window-close"></i>{add}</li> */}
          {/* <List /> */}
        </ul>
      </div>
    </div>
  );
}
