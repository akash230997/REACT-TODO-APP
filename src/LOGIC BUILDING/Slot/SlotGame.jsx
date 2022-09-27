import React from 'react';
import False from './False';
import True from './True';

// const SlotM = (props) =>{
//   // let A = '😊'; let B = '😊'; let C = '😊'; 
//       if(props.A === props.B && props.B === props.C ){
//          return (
//            <>
//              <h1>{props.A} {props.B} {props.C}</h1>
//              <p>THIS IS MATCHING</p>
//            </>
//          );
//       }else{
//         return (
//           <>
//             <h1>
//               {props.A} {props.B} {props.C}
//             </h1>
//             <p>THIS IS'NT MATCHING</p>
//           </>
//         );
//       }
// }

const SlotM = (props) => {
  return (props.A === props.B && props.B === props.C)? <True A={props.A} B={props.B} C={props.C} /> : <False A={props.A} B={props.B} C={props.C} />;

};

export default function SlotGame() {
  return (
    <div className="center">
      <h1>🎰 SLOTING GAME</h1>
      <SlotM A="🎰" B="🎰" C="🎰" />
      <SlotM A="😊" B="😂" C="😊" />
      <SlotM A="😊" B="😂" C="😂" />
      <SlotM A="😊" B="😂" C="😂" />
      <SlotM A="📛" B="📛" C="📛" />
      
    </div>
  );
}
