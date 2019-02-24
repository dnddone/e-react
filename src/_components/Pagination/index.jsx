import React from 'react';
import PaginationItem from './PaginationItem';

const Pagination = (props) => {
	const { currentPage, totalPages, handlePage } = props;
	let arrayPage = [];

	for (let i = currentPage - 5; i <= currentPage + 5; i++) {
		if (i > 0 && i <= totalPages) {
			arrayPage.push(i);
		}
	}

	return (
		<div className="pagination pagination__container">
			<ul className="pagination__list">
				{arrayPage.map((value, index) => {
					const isCurrent = currentPage === value;
					return <PaginationItem key={index} handlePage={!isCurrent ? handlePage : ()=>{}} page={value} current={isCurrent ? 'current' : ''} />
				})}
			</ul>
		</div>
	);
}

export default Pagination;