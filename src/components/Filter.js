import React, { Component } from 'react';

import FilteredFruitList from './FilteredFruitList';

const Filter = (props) =>
<div>
  <select onChange={props.handleChange} defaultValue="all">
    <option value="all">All</option>
     Filters here: { props.filters.map((filter) => {
     return <option key={filter} value={filter}>{filter}</option>
   })}
   </select>
   <FilteredFruitList filter={props.currentFilter} fruit={props.fruit} />
</div>

Filter.defaultProps = {
  filters: [],
  handleChange: function() {}
}

export default Filter;
