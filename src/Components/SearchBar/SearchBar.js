import React from 'react';
import './SearchBar.css';

export default class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.changeHandler = this.changeHandler.bind(this);
	}
	
	changeHandler(e) {
		const term = e.target.value;
		this.props.updateSearchTerm(term);
	}

	render() {
		return (
			<div className="col-auto">
				<input onChange={this.changeHandler} type="text" className="mb-3 form-control" placeholder="Search"></input>
			</div>
		)
	}
}