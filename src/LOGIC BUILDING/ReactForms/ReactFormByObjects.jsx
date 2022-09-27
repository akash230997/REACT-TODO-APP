import React,{useState} from "react";
import './ReactForm';

export default function ReactFormByObjects() {
     const [state, setstate] = useState({
        fname:"",
        lname:"",
        email:"",
        contact:"",
    });

    const pressKey = (event) =>{
        const {value, name} = event.target;
        setstate((previousValve)=>{
            return{
                ...previousValve,
                [name] : value
            }
        })
    }

    const submit = (value) =>{
        value.preventDefault();
        alert('Thank You😊')
    }
  return (
    <div>
      <div>
        <h1>
          Hello✨{state.fname} {state.lname}
        </h1>
        <p>{state.email}</p>
        <p>{state.contact}</p>
        <form action="" onSubmit={submit}>
          <input
            type="text"
            name="fname"
            placeholder="FIRST NAME"
            onChange={pressKey}
          />
          <input
            type="text"
            name="lname"
            placeholder="LAST NAME"
            onChange={pressKey}
          />
          <input
            type="text"
            name="email"
            placeholder="EMAIL"
            onChange={pressKey}
          />
          <input
            type="number"
            name="contact"
            placeholder="contact"
            onChange={pressKey}
          />
          {/* <input type="number" name="contact" onChange={valueEvent} placeholder="CONTACT NO." /> */}
          <button className="btn" type="submit">
            DONE
          </button>
        </form>
      </div>
    </div>
  );
}

// import React,{useState} from "react";
// import './ReactForm';

// export default function ReactFormByObjects() {
//     const [state, setstate] = useState({
//         fname:"",
//         lname:"",
//         email:"",
//     });

//     const okay = (event) =>{
//         event.preventDefault();
//         alert('Thank You😊😊')
//     }
//     const valueEvent = (event) =>{
//         const { value, name } = event.target;
//         setstate((preViousValue)=>{
//             return{
//                 ...preViousValue,
//                 [name]:value
//             }
//         })
//     }
//   return (
//     <div>
//       <div>
//         <h1>
//           Hello✨ {state.fname} {state.lname}
//         </h1>
//         <p> {state.email}</p>
//         {/* <p></p> */}
//         <form action="" onSubmit={okay}>
//           <input type="text" value={state.fname} name="fname" onChange={valueEvent} placeholder="FIRST NAME" />
//           <input type="text" value={state.lname} name="lname" onChange={valueEvent} placeholder="LAST NAME" />
//           <input type="text" value={state.email} name="email" onChange={valueEvent} placeholder="EMAIL" />
//           {/* <input type="number" name="contact" onChange={valueEvent} placeholder="CONTACT NO." /> */}
//           <button className="btn" type="submit">
//             DONE
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import "./ReactForm";

// export default function ReactFormByObjects() {

//     // const values = [1,2,3,4,5,6,7,8,9,10];

//     // // const [First,...remaining] = values;
//     // // console.log(First);
//     // // console.log(remaining);

//   const [state, setState] = useState({
//     Fname: "",
//     Lname: "",
//     Email: "",
//     Contact: "",
//   });
// //   const [storeVal setstoreVal] = useState('')

//   const MainFunc = (event) => {
//     const {value, name} = event.target;

//     setState((PreviousValue) => {
//         return {
//           ...PreviousValue,
//           [name]: value,
//         };

//     //   if (name === "First_Name") {
//     //     return {
//     //       Fname: value,
//     //       Lname: PreviousValue.Lname,
//     //       Email: PreviousValue.Email,
//     //       Contact: PreviousValue.Contact,
//     //     };
//     //   } else if (name === "Last_Name") {
//     //     return {
//     //       Fname: PreviousValue.Fname,
//     //       Lname: value,
//     //       Email: PreviousValue.Email,
//     //       Contact: PreviousValue.Contact,
//     //     };
//     //   } else if (name === "MailID") {
//     //     return {
//     //       Fname: PreviousValue.Fname,
//     //       Lname: PreviousValue.Lname,
//     //       Email: value,
//     //       Contact: PreviousValue.Contact,
//     //     };
//     //   } else if (name === "Phone") {
//     //     return {
//     //       Fname: PreviousValue.Fname,
//     //       Lname: PreviousValue.Lname,
//     //       Email: PreviousValue.Email,
//     //       Contact: value,
//     //     };
//     //   }
//     });
//   };

//   const SubmitFunc = (preventValue) => {
//     preventValue.preventDefault();
//     alert('Thank You 😊')
//   };
//   return (
//     <div>
//       <div>
//         <h1>
//           Hello✨ {state.Fname}
//           {state.Lname}
//         </h1>
//         <p>{state.Email}</p>
//         <p>{state.Contact}</p>
//         <form action="" onSubmit={SubmitFunc}>
//           <input
//             type="text"
//             name="Fname"
//             onChange={MainFunc}
//             value={state.Fname}
//             placeholder="FIRST NAME"
//           />
//           <input
//             type="text"
//             name="Lname"
//             onChange={MainFunc}
//             value={state.Lname}
//             placeholder="LAST NAME"
//           />
//           <input
//             type="text"
//             name="Email"
//             onChange={MainFunc}
//             value={state.Email}
//             placeholder="EMAIL"
//           />
//           <input
//             type="number"
//             name="Contact"
//             onChange={MainFunc}
//             value={state.Contact}
//             placeholder="CONTACT NO."
//           />
//           <button className="btn" type="submit">
//             DONE
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import "./FormSubmitReact";

// export default function ReactFormByObjects() {
//   const [state, setState] = useState({
//     fname: "",
//     lname: "",
//     email: "",
//   });
// //   const [store,setStore] = useState()
//   const Done = (eventVal) => {
//     eventVal.preventDefault();
//     // setStore(state)
//   };

//   const onthis = (event) => {
//     const Val = event.target.value;
//     const Name = event.target.name;
//     setState((preValue)=>{
//         if (Name === "fname") {
//           return {
//             fname: Val,
//             lname: preValue.lname,
//             email: preValue.email,
//           };
//         } else if (Name === "lname") {
//           return {
//             fname: preValue.fname,
//             lname: Val,
//             email: preValue.email,
//           };
//         } else if (Name === "email") {
//           return {
//             fname: preValue.fname,
//             lname: preValue.lname,
//             email: Val,
//           };
//         }
//     })
//   };
//   return (
//     <div>
//       <div>
//         <h1>
//           Hello {state.fname} {state.lname}
//         </h1>
//         <p>{state.email}</p>
//         <form action="" onSubmit={Done}>
//           <input
//             type="text"
//             name="fname"
//             onChange={onthis}
//             placeholder="FirstName!!😊"
//           />
//           <input
//             type="text"
//             name="lname"
//             placeholder="LastName!!😊"
//             onChange={onthis}
//           />

//           <input
//             type="text"
//             name="email"
//             placeholder="Enter Your E-mail!!✨"
//             onChange={onthis}
//           />

//           <button className="btn" type="submit">
//             DONE
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
