import React from "react";
import ReactDOM from "react-dom";

const fName = "Elsa";
const lName = "Wang";
const currentDate = new Date();
const year = currentDate.getFullYear();
console.log(year);

ReactDOM.render(
<div>
    <h1>Hello user!</h1>
    <p>Created by {fName + " " + lName}</p>
    <p>CopyRight {year}</p>
</div>, 
document.getElementById("root"));
