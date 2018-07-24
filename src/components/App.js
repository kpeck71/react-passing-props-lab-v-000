import React from 'react';

import FruitBasket from './FruitBasket';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      showEaten: false,
      fruit: [],
      filters: [],
      currentFilter: null
    };
  }

  componentDidMount() {
    this.updateFruitList();
    this.fetchFruit();
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({ currentFilter: e.target.value });

  }

  toggleListMode = () => this.setState({
    showEaten : !this.state.showEaten
  });

  updateFruitList = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  fetchFruit = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  render() {
    return (
    <FruitBasket
    fruit={this.state.fruit}
    filters={this.state.filters}
    currentFilter={this.state.currentFilter}
    handleChange={this.handleChange} />

    )

  }

}
