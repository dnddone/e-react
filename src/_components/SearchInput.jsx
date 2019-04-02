import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  type: PropTypes.string,
  handleSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

const defaultProps = {
  type: 'text',
  placeholder: 'Try to search anything...',
};

class SearchInput extends Component {
  state = {
    searchValue: '',
  }

  handleSearch = (event) => {
    this.setState(
      { searchValue: event.target.value },
      () => this.props.handleSearch(this.state.searchValue),
    );
  }

  render() {
    const { searchValue } = this.state;
    const { type, placeholder } = this.props;

    return (
      <div className="search__container">
        <input
          className="search__input"
          type={type}
          value={searchValue}
          onChange={this.handleSearch}
          placeholder={placeholder}
        />
      </div>
    );
  }
}

SearchInput.propTypes = propTypes;
SearchInput.defaultProps = defaultProps;

export default SearchInput;
