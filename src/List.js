// The List component should render markup matching the design.html: 
// a section with a class of 'List', containing a header and div with class 'List-cards'. OK
// The List component accepts 2 props: header and cards. OK
// header is a string of the header of the card to render. OK
// 
// cards is an array of card objects. OK
//    Each object should have a title and content. OK
// These props will be passed in for each List from the App component. NTD!!!
// The List should render a Card component for each of the cards in the cards array prop. OK
// Each instance of the Card component should be passed 2 props (and a key). OK
//    The 2 props are title and content. OK
// The title prop is a string for the Card's title. OK
// The content prop is a string of the Card's content. OK
import React from 'react';
import Card from './Card';

function List (props) {
  return (
    <section className='List'>
      <header className='List-cards'>
        <h3>{props.header}</h3>
      </header>
      <div className='List-cards'>
        {props.cards.map((card) =>
          <Card 
          key={card.id}
          title={card.title}
          content={card.content}
          />
        )}
      </div>
    </section>
  );
}

export default List; 