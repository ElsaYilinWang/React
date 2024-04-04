import React from "react";

function Card(props){
    return <div>
        <h2>{props.name}</h2>
        <img src= {props.img} alt="Beyonce Billboard" />
        <p className="info">{props.tel}</p>
        <p className="info">{props.email}</p>
    </div>;
}

export default Card;