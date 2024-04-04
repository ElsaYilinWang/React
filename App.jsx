import React from "react";
import Heading from "./Heading.jsx";
import * as calculator from "./calculator.js";
import Card from "./Card.jsx";
import contacts from "./contacts.js";

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
        <Card 
        name= {contacts[0].name}
        img= {contacts[0].imgURL}
        tel= {contacts[0].phone}
        email= {contacts[0].email}/>

        <Card 
        name= {contacts[1].name}
        img= {contacts[1].imgURL}
        tel= {contacts[1].phone}
        email= {contacts[1].email}/>

        <Card 
        name= {contacts[2].name}
        img= {contacts[2].imgURL}
        tel= {contacts[2].phone}
        email= {contacts[2].email}/>

    </div>
}