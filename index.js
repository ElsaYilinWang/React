import React from "react";
import ReactDOM from "react-dom";

const fName = "Elsa";
const lName = "Wang";
const currentDate = new Date();
const year = currentDate.getFullYear();
console.log(year);

const image = "https://www.sykescottages.co.uk/blog/10-fun-facts-about-easter-you-probably-didnt-know/";

const customStyle = {
    color: "blue",
    fontSize: "20px",
    border:"1px solid black"
}

ReactDOM.render(
<div>
    // JSX add heading and make the content editable 
    <h1 className="heading" contentEditable="true" spellCheck="true">Hello user!</h1>
    <div>
        <img className="easter-img" src= {image} alt="Easter" />
        <img style={{backgroundColor: "red"}} src="https://www.christianity.com/wiki/holidays/true-meaning-of-easter-why-is-it-celebrated.html" alt="Easter2" />
    </div>
    <h2 style={customStyle}>Hello World! This is h2</h2>
    <p>Created by {fName + " " + lName}</p>
    <p>CopyRight {year}</p>
</div>, 
document.getElementById("root"));
