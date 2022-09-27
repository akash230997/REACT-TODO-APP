import React from 'react'

export default function MapMethod() {

    console.log("MapMethod")
    const arr = [1, 2, 3, 4, 5];
    const valueStore = arr.map((currVal, index, array) => {
        return `${currVal}  ${index}  ${array}`;
    })
    console.log(valueStore)
    return (
        <div>
            <h1>HelloWOrld!!</h1>
        </div>
    )
}
