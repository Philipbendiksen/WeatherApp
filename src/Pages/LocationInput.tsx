import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function LocationInput() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between p-2">
        <span>SEARCH LOCATION</span>
        <MagnifyingGlassIcon className="w-6 h-6" />
      </div>

      <input placeholder="Search" />
    </div>
  );
}

export default LocationInput;


/* import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
  }

  handleInputChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state.searchTerm);
    this.setState({ searchTerm: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          type="text"
          value={this.state.searchTerm}
          onChange={this.handleInputChange}
          placeholder="Sök plats..."
        />
        <button type="submit">Sök</button>
      </form>
    );
  }
}

export default SearchBar;
 */