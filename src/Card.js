// create a div with a class of 'Card' OK
//  containing an h3 for the card's title OK
//  and a p element for the card's content. OK
// The Card component accepts 2 props: title and content. OK
// title is a string of the card's title. OK 
// content is a string of the card's content. OK
// These props will be passed in for each Card from the List component. NTD!!!

import React from 'react';
import './Card.css';

function Card (props) {
  return (
    <div className='Card'>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
}

export default Card;