import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = props =>
    <div className="fruit-basket">
    Fruit Basket
      <Filter handleChange={props.handleChange} filters={props.filters} currentFilter={props.currentFilter} fruit={props.fruit}/>
    </div>

FruitBasket.defaultProps = {
  filters: [],
  fruit: [],
  currentFilter: '',
  updateFilterCallback: function() {}
}

export default FruitBasket;
