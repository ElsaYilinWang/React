import React from "react";
import Heading from "./Heading.jsx";
import * as calculator from "./calculator.js";
import Card from "./Card.jsx";
import contacts from "./contacts.js";
import emojipedia from "./emojipedia.jsx";

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

    console.log(contacts);

    return <div>
        <Heading />
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
        

        

    </div>
}