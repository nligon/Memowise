import React, { PropTypes } from 'react';
import DeckItem from './DeckItem';
import Search from './Search';

const Decks = ({ decks, handleChange, searchinput }) => (
  
  <div className="container">
    <h4 className="center grey-text text-darken-4"> Decks
    </h4>
    
    <Search handleChange={handleChange}>
    </Search>
              
    <div className="card-list">
      <div className="card-columns">  
        {decks.map(
          (item, idx) => {
            if (item.name.includes(searchinput)) {
             return <DeckItem key={idx} deck={item} />
            }
          }
        )}
        </div>
    </div>
  </div>
);

Decks.propTypes = {
  decks: PropTypes.array.isRequired,
};

export default Decks;