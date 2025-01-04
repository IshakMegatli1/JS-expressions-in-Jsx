import React from "react";
import ReactDOM from "react-dom";

const fName = "Ishak";
const lName = "Megatli";
const lNum = "22";

//to use a constant : {}
//you can also use JS expressions like 2+2 or math.random ...
//but you CANT write JS statements like if(something) return 7 ...
ReactDOM.render(
  <div>
    <h1>Hello {fName + " " + lName} !</h1>
    <h1>
      Hello {fName} {lName} !
    </h1>
    <h1>Hello {`${fName} ${lName}`} !</h1>
    <p>Your lucky number is {lNum}</p>
    <p>Your lucky number is {7 + 2}</p>
    <p>Your lucky number is {Math.floor(Math.random() * 10)}</p>
  </div>,

  document.getElementById("root")
);
