import React, { useState } from 'react';
import './Accordion.css';
import questions from './AccordionApi';
import MainPage  from './MainPage';



export default function Accordion() {
    const [data] = useState(questions)
  return (
    <section className='main-div'>
            <h1>REACT QUESTIONS</h1>
            {data.map((currElem)=>{
              const {id} = currElem;
              return <MainPage key={id} {...currElem}/>
            })}
    </section>
  )
}
