import React from 'react';

const PaginationItem = ({props}) => (
    <li 
        className={`pagination__item ${props.current}`} 
        onClick={() => {props.handlePage(props.page)}}
    >
        {props.page}
    </li>
);

export default PaginationItem;