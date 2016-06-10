import React, { PropTypes } from 'react';
import DeckItem from './DeckItem';
// this.state = decks;

const Decks = ({ decks }) => (
  <div className="container">
    <h4 className="center grey-text text-darken-4"> Decks </h4>
    
            <form id="tfnewsearch" method="get" action="http://www.google.com">
            <p><input type="text" placeholder="Type your search here"/></p>
            <p><input type="submit" value="search" class="tfbutton"/></p>  
            </form>
              <div class="tfclear"></div>
              
    <div className="card-list">
      <div className="card-columns">
        {decks.map((deck, idx) => r<DeckItem key={idx} deck={deck} />)}
      </div>
    </div>
  </div>
);

Decks.propTypes = {
  decks: PropTypes.array.isRequired,
};

export default Decks;