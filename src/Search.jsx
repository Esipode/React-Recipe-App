import React from 'react';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			search: ''
		}
	}
	render() {
		return (
			<div>
				<form className="searchContainer">
					<img src="./logo.svg" alt="logo" draggable="false"/>
					<input className="searchBar" placeholder={this.props.isLoading ? "Searching..."  : "Search recipes here..."}  type="text" value={this.state.search} style={this.props.isLoading ? {opacity: '0.4'} : {opacity: ''}}/>
					<button className="searchBtn"><i className="fas fa-search"></i></button>
				</form>
			</div>
		)
	}
};

export default Search;