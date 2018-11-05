import React, { Component } from 'react';

class SearchForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchValue: ''
		}
	}

	onChangeInput = (event) => {
		this.setState({
			searchValue: event.target.value
		});
	}

	render() {
		return (
			<div className="search__container">
				<input 
					className="search__input"
					type="text"
					onChange={this.onChangeInput.bind(this)}
					placeholder="Try to search anything..."
				/>
			</div>
		);
	}
}

export default SearchForm;