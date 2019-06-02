import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  type: PropTypes.string,
  searchHandler: PropTypes.func.isRequired,
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

  searchHandler = (event) => {
    this.setState(
      { searchValue: event.target.value },
      () => this.props.searchHandler(this.state.searchValue),
    );
  }

  searchSearch = () => {
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
          onChange={this.searchHandler}
          placeholder={placeholder}
        />
      </div>
    );
  }
}

SearchInput.propTypes = propTypes;
SearchInput.defaultProps = defaultProps;

export default SearchInput;
