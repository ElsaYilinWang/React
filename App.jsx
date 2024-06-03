import React, {useState} from "react";
import Heading from "./Heading.jsx";
import * as calculator from "./calculator.js";
import Card from "./Card.jsx";
import contacts from "./contacts.js";
import emojipedia from "./emojipedia.jsx";
import Login from "./Login.jsx";

// Login page
var isLoggedIn = false;

// Ternary Operator
// CONDITION ? DO IF TRUE : DO IF FALSE
function renderConditionally(){
    //if (isLoggedIn === true){
        //return <h1>Hello</h1>
    //} else {
        //return <Login />;
    //}
    isLoggedIn? <h1>Hello</h1> : <Login />;
}

// Use arrow function to simplify the function
function createCard(contact){
    return (
        <Card 
        key = {contact.id}
        name= {contact.name}
        img= {contact.imgURL}
        tel= {contact.phone}
        email= {contact.email}
        />
    );
}

const newEmojipedia = emojipedia.map(function(emojiEntry){
    return emojiEntry.meaning.substring(0, 100);
})

console.log(newEmojipedia);

var numbers = [3, 56, 2, 48, 5];

const newNumbers = numbers.map(x => x * x);

console.log(newNumbers);

function App(){

    // useState Hooks
    setInterval(updateTime, 1000);

    const now = new Date().toLocaleTimeString();

    const [time, setTime] = useState(now);

    function updateTime(){
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime);
    }



    console.log(contacts);

    return <div>
        <Heading />
        <h1>{time}</h1>
        <button onClick={updateTime}>Get Time</button>
        <ul>
        <li>{calculator.add(1, 2)}</li>
        <li>{calculator.multiply(2, 3)}</li>
        <li>{calculator.subtract(7, 2)}</li>
        <li>{calculator.divide(5, 2)}</li>
        </ul>
        {contacts.map( contact => (
            <Card 
            key = {contact.id}
            name= {contact.name}
            img= {contact.imgURL}
            tel= {contact.phone}
            email= {contact.email}
            />
        ))}
        
        <Login userIsLoggedIn={isLoggedIn} />
        

    </div>
}