import React from "react";
import Heading from "./Heading.jsx";
import * as calculator from "./calculator.js";
import Card from "./Card.jsx";
import contacts from "./contacts.js";


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
        {contacts.map(createCard)}
        

        

    </div>
}