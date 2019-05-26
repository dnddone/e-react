import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PaginationItem from './PaginationItem';

const propTypes = {
  page: PropTypes.number,
  totalPages: PropTypes.number,
  paginationHandler: PropTypes.func,
};

const defaultProps = {
  page: 1,
  totalPages: 1,
  paginationHandler: () => {},
};

class Pagination extends Component {
  paginationArray = (diff = 6) => {
    const { page, totalPages } = this.props;
    const arrayPages = [];

    for (let i = page - diff; i <= page + diff; i += 1) {
      if (i > 0 && i <= totalPages) {
        arrayPages.push(i);
      }
    }

    return arrayPages;
  };

  paginationItem = (value) => {
    const { page, paginationHandler } = this.props;
    const isCurrent = page === value;

    return (
      <PaginationItem
        key={value}
        page={value}
        paginationHandler={paginationHandler}
        isCurrent={isCurrent}
      />
    );
  }

  render() {
    const arrayPages = this.paginationArray();

    return (
      <div className="pagination pagination__container">
        <ul className="pagination__list">
          {arrayPages.map(this.paginationItem)}
        </ul>
      </div>
    );
  }
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;

const mapStateToProps = state => ({
  page: state.pagination.page,
  totalPages: state.pagination.totalPages,
});

export default connect(mapStateToProps)(Pagination);
