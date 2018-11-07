import React from 'react';

const SearchForm = (props) => (
	<div className="search__container">
		<input 
			className="search__input"
			type="text"
			onChange={props.onChangeHandler}
			placeholder="Try to search anything..."
		/>
	</div>
);


export default SearchForm;