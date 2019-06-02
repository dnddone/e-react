import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PaginationItem from './PaginationItem';

const propTypes = {
  page: PropTypes.number,
  total: PropTypes.number,
  paginationHandler: PropTypes.func,
};

const defaultProps = {
  page: 1,
  total: 1,
  paginationHandler: () => {},
};

class Pagination extends Component {
  paginationRange = (diff = 6) => {
    const { page, total } = this.props;
    const range = [];

    if (total <= 1) {
      return range;
    }

    for (let i = page - diff; i <= page + diff; i += 1) {
      if (i > 0 && i <= total) {
        range.push(i);
      }
    }

    return range;
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
    const paginationArray = this.paginationRange();

    return (
      <div className="pagination pagination__container">
        <ul className="pagination__list">
          {paginationArray.map(this.paginationItem)}
        </ul>
      </div>
    );
  }
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;

const mapStateToProps = state => ({
  page: state.pagination.page,
  total: state.pagination.total,
});

export default connect(mapStateToProps)(Pagination);
