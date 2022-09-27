import React from 'react';
import "./App.css"



export default function NotMatch(props) {
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
