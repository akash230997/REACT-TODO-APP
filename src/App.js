// import React, { useState } from 'react';
import React from 'react';
// import Accordion from './Components/Accordion/Accordion';
// import Card from './Components/BootstrapCard/Card';
// import './App.css';
// import Todo from './Components/TodoApk/Todo.jsx';
// import Testing from './Components/todoPractce/Testing';
// import IncreDecre from './Components/incrementdecrement/IncreDecre';
// import Countdownnpm from './countdownnpm';
// import Bootstrap from './Components/bootstraptesting/Bootstrap';
// import UseContext from './Components/ComponentsUseConext/UseContext';
// import SlotGame from './LOGIC BUILDING/Slot/SlotGame';
// import './LOGIC BUILDING/Slot/SlotGame.css';
// import ReactForm from './LOGIC BUILDING/ReactForms/ReactForm';
// import FormSubmitReact from './LOGIC BUILDING/ReactForms/FormSubmitReact';
// import ReactFormByObjects from './LOGIC BUILDING/ReactForms/ReactFormByObjects';
import ToDo from './LOGIC BUILDING/ToDoMore/ToDo';

export default function App() {
  
  return(
    // <Todo />
    // <Testing />
    // <IncreDecre/>
    // <Countdownnpm/>
    // <Bootstrap/>
    // <Accordion/>
    // <Card/>
    // <UseContext />
    // <SlotGame/>
    // <ReactForm/>
    // <FormSubmitReact/>
    // <ReactFormByObjects/>
    <>
      <ToDo/>
    </>
  )
  // const [details , setDetails] = useState({
  //   fname:'',
  //   lname:'',
  //   email:'',
  //   number:'',
  // })
  
  // const submitEvent = (event) =>{
  //   event.preventDefault();
  // }

  // const onKey_event = (event) =>{
    
  //   const { value, name } = event.target;

  //   setDetails((previousvalue)=>{
  //     return{
  //       ...previousvalue,
  //       [name]: value,
  //     }
  //   });

    // setDetails((PreVal)=>{
    //   if (name === 'fname') {
    //     return {
    //       fname: value,
    //       lname: PreVal.lname,
    //       email: PreVal.email,
    //       number: PreVal.number,
    //     }
    //   } else if (name === 'lname'){
    //     return {
    //       fname: PreVal.fname,
    //       lname: value,
    //       email: PreVal.email,
    //       number: PreVal.number,
    //     }
    //   } else if (name === 'email') {
    //     return {
    //       fname: PreVal.fname,
    //       lname: PreVal.lname,
    //       email: value,
    //       number: PreVal.number,
    //     }
    //   } else if (name === 'number') {
    //     return {
    //       fname: PreVal.fname,
    //       lname: PreVal.lname,
    //       email: PreVal.email,
    //       number: value,
    //     }
    //   }
    // })
  }
//   return (
//     <div className='MidBox'>
//       <form action=""onSubmit={submitEvent}>
//         <h1>Hello {details.fname} {details.lname}</h1>
//         <p>{details.email}</p>
//         <p>{details.number}</p>
//         <input type="text" name='fname' className='' onChange={onKey_event} placeholder='Your First Name' />
//         <input type="text" name='lname' className='' onChange={onKey_event} placeholder='Your Last Name' />
//         <input type="text" name='email' className='' onChange={onKey_event} placeholder='Email' />
//         <input type="number" name='number' className='' onChange={onKey_event} placeholder='Your Contact Number' />
//         <button className='clock_btn clock_btn2'>Submit</button>
//       </form>
//     </div>
//   )
// }




// ================Handling Complex Multiple Input Form States in React===========

// import React from 'react'
// import { useState } from 'react'
// import './App.css'



// export default function App() {
//   const [FullName, setFullName] = useState({
//     fname:"",
//     lname:"",
//     email:"",
//     number:""
//   });
//   const [storeVal,update] = useState()

//   const submit = (event) =>{
//     event.preventDefault()
//   }

//   const inputVal = (event) =>{
//     const {value,name} = event.target;

//     setFullName((PreviousValue) => {
//       if (name === 'Fname') {
//         return {
//           fname: value,
//           lname: PreviousValue.lname,
//           email: PreviousValue.email
//         }
//       } else if (name === 'Lname') {
//         return {
//           fname: PreviousValue.fname,
//           lname: value,
//           email: PreviousValue.email
//         }
//       } else if (name === 'email') {
//         return {
//           fname: PreviousValue.fname,
//           lname: PreviousValue.lname,
//           email: value
//         }
//       } else if (name === 'number') {
//         return {
//           fname: PreviousValue.fname,
//           lname: PreviousValue.lname,
//           email: PreviousValue.email,
//           number:value
//         }
//       }
//     })
//   }

//   return (
//     <div>
//       <div className='MidBox'>
//         <form action="" onSubmit={submit}>
//           <h1 style={{ textDecoration: "underline skyblue", }}>Hello {FullName.fname}  {FullName.lname} </h1>
//           <p className='emailP'>EMAIL : {FullName.email}</p>
//           <p className='emailP'>Contact : {FullName.number}</p>
//           <input type="text" onChange={inputVal} name="Fname" placeholder='Your First Name!!!' />
//           <input type="text" onChange={inputVal} name="Lname" style={{ marginTop: '20px' }} placeholder='Your Last Name!!!' />
//           <input type="email" onChange={inputVal} name="email" style={{ marginTop: '20px' }} placeholder='Your E-Mail' />
//           <input type="number" onChange={inputVal} name="number" style={{ marginTop: '20px' }} placeholder='Phone Number' />
//           <button className='clock_btn clock_btn2'>Submit</button>
//         </form>
//       </div>
//     </div>
//   )
// }



// =============================Two Text Input Fields =========================================================
// import React from 'react';
// import { useState } from 'react';
// import './App.css';

// export default function App() {
//   const [FirstName,setFirstName]=useState("");
//   const [showFirst_Name, setshowFirst_Name] = useState();
//   const [LastName,setLastName]=useState("");
//   const [showLast_Name, setshowLast_Name] = useState();
//   const [pss, setpss] = useState("");
//   const [showPss, setshowPss] = useState();


//   const firstChange = (event) =>{
//     setFirstName(event.target.value);
//   }

//   const lastChange = (event) => {
//     setLastName(event.target.value)
//   }
//   const Password = (event) =>{
//     setpss(event.target.value)
//   }
//   const SubmitForm = (event) => {
//     event.preventDefault()
//     setshowFirst_Name(FirstName)
//     setshowLast_Name(LastName)
//     setshowPss(pss)
//   }
//   return (
//     <div className='MidBox'>
//     <form action="" onSubmit={SubmitForm}>
//         <h1>Hey!! {showFirst_Name} {showLast_Name} {showPss}</h1>
//       <input type="text" onChange={firstChange} style={{marginBottom:'20px'}} name="" placeholder='First Name' id="" />
//         <input type="text" onChange={lastChange} name="" style={{ marginBottom: '20px' }} placeholder='Last Name' id="" />
//       <input type="text" onChange={Password} name="" placeholder='Password' id="" />
//       <button className='clock_btn clock_btn2'>SUBMIT</button>
//     </form>
//     </div>
//   )
// }


// ======================================Input Two Fields Logic =============================
// import React from 'react';
// import { useState } from 'react';
// import './App.css'


// export default function App() {
//   const [FullName, setFullName] = useState({
//     fname : "",
//     lname : "",
//     email : ""
//   });
  


//   const submit = (event) => {
//     event.preventDefault()
//     alert("Form Submitted")
    
//   }
//   const inputVal = (event) => {
//     const value = event.target.value;
//     const name = event.target.name;

//     setFullName((previousVal)=>{
//       if(name === "Fname"){
//         return{
//           fname: value,
//           lname: previousVal.lname,
//           email: previousVal.email
//         }
//       } else if (name === "Lname"){
//         return {
//           fname: previousVal.fname,
//           lname: value,
//           email: previousVal.email
//         }
//       } else if (name === 'email'){
//         return {
//           fname: previousVal.fname,
//           lname: previousVal.lname,
//           email: value
//         }
//       }

//     })
//   }


//   return (
//     <div className='MidBox'>
//       <form action="" onSubmit={submit}>
//         <h1 style={{ textDecoration: "underline skyblue", }}>Hello {FullName.fname} {FullName.lname}</h1>
//         <p className='emailP'>EMAIL : {FullName.email}</p>
//         <input type="text" onChange={inputVal}  name="Fname"  placeholder='Your First Name!!!' />
//         <input type="text" onChange={inputVal}  name="Lname"  style={{marginTop:'20px'}} placeholder='Your Last Name!!!' />
//         <input type="email" onChange={inputVal}  name="email"  style={{marginTop:'20px'}} placeholder='Your E-Mail' />
//       <button className='clock_btn clock_btn2'>Submit</button>
//     </form>
//     </div>
//   )
// }



// ================================================Submit Value Form input =============================
// import React from 'react';
// import { useState } from 'react';
// import './App.css'

// export default function App() {
//   let Name = "";
//   const [text,updatetext] = useState(Name);
//   const [value, setValue] = useState();

//   const key_press = (event) =>{
//     updatetext(event.target.value);
//   }
//   const postData = () => {
//     console.log('Checked');
//     setValue(text)
//   }
//   return (
//     <div className='MidBox'>
//       <h1>Hello {value}</h1>
//       <input type="text" value={text} name="" onChange={key_press} placeholder='Name Here!!' id="" />
//       <button className='clock_btn clock_btn2' onClick={postData}>SUBMIT</button>
//     </div>
//   )
// }



// ================= REACT Handling Events ==========================================
// import React from 'react';
// import { useState } from 'react';
// import './App.css';


// function App() {
//   const btn_value = 'ONE1️⃣';
//   let bgcolor = "rgba(128, 128, 128, 0.46)";
//   const [Firstclr,Secondclr] = useState(bgcolor);
//   const [Text, setText] = useState(btn_value)
//   // let bgcolor = "red";
//   const changecolor = () =>{
//     let bgcolorTwo = '#ccccff';
//     Secondclr(bgcolorTwo)
//     setText('TWO2️⃣')
//   }
//   const dblClick = () =>{
//     let bgcolorThree = '#ff80b3';
//     Secondclr(bgcolorThree)
//     setText('THREE3️⃣')
//   }
//   return(
//     <>
//       <div className='MidBox' style={{ backgroundColor: Firstclr }}>
//         <button className='clock_btn clock_btn2'onDoubleClick={dblClick} onClick={changecolor}>{Text}</button>
//     </div>
//     </>
//   );
  
// }

// export default App;




//===========================DIGITAL_CLOCK==================================
// import React from 'react';
// import { useState } from 'react';
// import './App.css';


// function App() {
//   // const Time = new Date().toLocaleTimeString()
//   // console.log(Time)
//   const [Time, updatTime] = useState(new Date().toLocaleTimeString());
//   const upTime = () => {
//     updatTime(new Date().toLocaleTimeString());
//   }
//   return (
//     <>
//       <h1 className='time'>{Time}</h1>
//       <button className='clock_btn' onClick={upTime}>UPDATE  </button>

//     </>
//   )
// }

// export default App;






















// ================================================ Count useState ===================================================================
// import React from 'react';
// import { useState } from 'react';
// import './App.css';


// function App(){
//   const [count, updatecount] = useState(1);
//   const increase =()=>{
//     updatecount(count + 1)
//   }
//   const decrement = () => {
//     updatecount(count - 1)
//   }
//   return(
//     <>
//       <h1>{count}</h1>
//       <button className='btn' onClick={increase} style={{background:'blue'}}>Add</button>

//       <button className='btn' onClick={decrement} style={{ background: 'red', marginLeft:'10px' }}>Decrement</button>
//     </>
//   )
// }

// export default App;



// +======================================================================================++=================+++++++++++++=


// import React from 'react';
// import SlotM from './SlotM';
// // import NotMatch from './NotMatch';
// // SlotMachine Game:
// function App() {
//   return (
//     <>
//       <h1 className='heading'>SLOT MACHINE GAME</h1>
//       <div>
//         <div className="slotMachine">
//             <SlotM a="😊" b="😊" c="😊" />
//             <SlotM a="😊" b="😊" c="🥺" />
//             <SlotM a="🥰" b="🥰" c="🥰" />
//             <SlotM a="🌟" b="🌟" c="🥺" />
//           {/* <NotMatch a="😊" b="😊" c="🥺" /> */}
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;





// +======================================================================================++=================+++++++++++++=
// import './App.css';
// import Data from './DataNetflixTesting'
// import Card from './Card'



// function App() {
//   //Using Map Method:
//   return (
//     <div>
//       <h1>TOP 5 NETFLIX SERIES </h1>
//         {Data.map((currValue)=>{
//           return (
//           <Card imgg={currValue.imglink}
//             caption={currValue.Netflix}
//             show={currValue.Name}
//             about={currValue.about}
//             link={currValue.Link}/>
//           )
//         })}
//     </div>
    
//   );
// }

// export default App;

// {
//   Data.map((currVal) => {
//     return currVal;
//   })
// }

// ===================================================================================================

// import Add,{Multiplication , Subtraction , Division} from './Calculator';
// import * as calculation from './Calculator';


// function App() {
//   return (
//     <div>
//       <h1>CALCULATOR</h1>
//       <p>ADD : {calculation.default(2,10)}</p>
//       <p>SUB : {calculation.Subtraction(2,10)}</p>
//       <p>DIV : {calculation.Division(2,10)}</p>
//       <p>MULTI : {calculation.Multiplication(2,10)}</p>
//     </div>
//   );
// }



