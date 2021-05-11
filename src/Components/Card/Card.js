import React, { Component } from 'react';

import './Card.css';

const Card = (props) => 
{
  return(
    <div className="card">

      
    <a name ={props.anchor}></a>

      <div className = "card-container">
        <div className = "card-header">
          <h1> {props.title} </h1>
        </div>

        <div className = "card-content">
      
          {props.content}
          
          
        </div>
    

      </div>

    </div>
  )
}

export default Card;
