import React, { PropTypes } from 'react';

class Search extends React.Component {
  
  render() {
    return (
      <div className="search-bar form-inline">
        <form id="tfnewsearch" method="get" action="http://www.google.com">
          <p><input type="text" placeholder="Type your search here"/></p>
          <p><input type="submit" value="search" class="tfbutton"/></p>  
        </form>
        <div class="tfclear">
        </div>      
      </div>
    );
  }
}

export default Search;