import React, { Component } from 'react';
// import PropTypes from 'prop-types';

const propTypes = {};
const defaultProps = {};

class SearchInput extends Component {
  state = {
    searchValue: '',
  }

  handleSearch = (event) => {
    this.setState({ searchValue: event.target.value });
  }

  render() {
    return (
      <div className="search__container">
        <input
          className="search__input"
          type="text"
          value={this.state.searchValue}
          onChange={this.handleSearch}
          placeholder="Try to search anything..."
        />
      </div>
    );
  }
}

SearchInput.propTypes = propTypes;
SearchInput.defaultProps = defaultProps;

export default SearchInput;
