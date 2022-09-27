import React from 'react'
import ComA from './ComA'
import { createContext } from 'react';

const fname = createContext();
const lname = createContext();
const Age = createContext();


export default function UseContext() {
  return (
    <>
    {/* <ComA/> */}
      <fname.Provider value={'Akash'}>
        <lname.Provider value={'Meena'}>
          <Age.Provider value={'24'}>
          <ComA />
          </Age.Provider>
        </lname.Provider>
      </fname.Provider>
    </>
  )
}
export {fname,lname,Age};

