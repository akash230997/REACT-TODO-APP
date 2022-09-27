import React from 'react';
// import ComC from './ComC';
import {useContext} from 'react';
import {fname,lname,Age} from './UseContext';


const ComB = () => {
    const First = useContext(fname);
    const Last = useContext(lname);
    const myAge = useContext(Age);
    return (
        <>
            <h1>1. {First}</h1>
            <h1>2. {Last}</h1>
            <h1>3. {myAge}</h1>
        </>
    );
}

export default ComB;







// import React from 'react';
// import {useContext} from 'react';
// // import ConC from './ComC';
// import {val,val2,Starts} from './UseContext';


// export default function ConB() {
//     const firstName = useContext(val)
//     const lastName = useContext(val2)
//     const stars = useContext(Starts)

//     return (
//         <div>
//         <h1>{firstName}</h1>
//         <h1>{lastName   }</h1>
//         <h1>{stars}</h1>
//             {/* <ConC title={value}/> */}
//         </div>
//     )
// }
