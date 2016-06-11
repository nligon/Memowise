import React, { PropTypes } from 'react';
import Reducers from '../reducers/index';
  
const Search = ({handleChange}) => (
      <div className="searchbar">
        <form>
          <p><input type="text" placeholder="Type your search here" onChange={handleChange}/></p>
        </form>
      </div>
)

export default Search;