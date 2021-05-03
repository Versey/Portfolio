import React, { Component } from 'react';

import './Card.css';

const Card = props => {
  return(
    <div className="card">
    <a name ={props.anchor}></a>

      <div className="card-header">
          <h2>{props.title}</h2>}
        </div>
      <div className = "card-container">

        <div className = "card-content">
          
          {props.content}

        </div>
        <div className = "card-photo-right">
          {props.rimage}
        </div>

      </div>
    </div>
  )
}

export default Card;
