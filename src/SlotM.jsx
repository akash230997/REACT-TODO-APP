import React from 'react';
import "./App.css"


const SlotM = (props) =>{
           if (props.a === props.b && props.b === props.c){
            return (
                <>
                    <div className="innerblocks">
                        <h1>{props.a} {props.b} {props.c}</h1>
                        <p>This is Match</p>
                        <hr />
                    </div>
                </>
            )
           }else{
               return (
                   <>
                       <div className="innerblocks">
                           <h1>{props.a} {props.b} {props.c}</h1>
                           <p>This Is Not A Match</p>
                           <hr />
                       </div>
                   </>
               )
           }
}

export default SlotM;