import React, { useState } from "react";
import "./Todo.css";
import Listing from "./Listing";

export default function Todo() {
  const [val1, setval1] = useState("");
  const [store, setstore] = useState([]);

  const task = (event) => {
    setval1(event.target.value);
  };
  const clickedd = () => {
    setstore((PreVal) => {
      console.log(PreVal);
      return [...PreVal, val1];
    });
    setval1("");
    // setstore("");
  };
  const itemDelete = (id) => {
    console.log("Deleted"); //value delete methodS

    setstore((olditm) => {
      console.log(olditm);
      return olditm.filter((currElem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className="main">
      <div className="box">
        <h1 style={{ marginTop: "20px" }} className="heading">
          TODO LIST
        </h1>
        <div className="portion">
          <input
            type="text"
            onChange={task}
            maxLength="10"
            value={val1}
            className="askList"
            placeholder="Add Your Task Here"
          />
          <span onClick={clickedd}>
            <i className="fas fa-plus-circle"></i>
          </span>
        </div>
        <ul className="list">
          {/* <li>Buy Mango</li> */}
          {store.map((CurrVal, index) => {
            return (
              <Listing
                key={index}
                id={index}
                deleteFunc={itemDelete}
                store={CurrVal}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
