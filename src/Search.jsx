import React from 'react';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			search: '',
			hideHeader: false
		}
		this.pagePosition = 0;
	}
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll)
	}
	handleScroll = () => {
		let headerHider = this.pagePosition < window.pageYOffset  || window.pageYOffset < 1 ? this.setState({hideHeader: true}) : this.setState({hideHeader: false});
		this.pagePosition = window.pageYOffset;
		if (!window.pageYOffset >= 1) {
			this.setState({
				hideHeader: false
			})
		}
		return headerHider;
	}
	startSearch = (e) => {
		e.preventDefault();
		if (this.state.search === '' || this.props.isLoading) {
			return
		}
		else {
			this.props.getRecipeCallback(this.state.search);
			return this.setState({
				search: ''
			})
		}
		
	}
	searchUpdate = (e) => {
		if (this.props.isLoading) {
			return
		}
		else {
			let srcVal = e.target.value;
			const regExp = /[^\w\s-]/g;
			if (srcVal.match(regExp)) {
				srcVal = srcVal.replace(regExp, '');
			}
			return this.setState({
				search: srcVal
			})
		}
	}
	render() {
		return (
			<div className={this.state.hideHeader ? "header hideHeader" : "header"}>
				<form className="searchContainer">
					<img src="./logo.svg" alt="logo" draggable="false"/>
					<input className="searchBar" placeholder={this.props.isLoading ? "Searching..."  : "Search recipes here..."}  type="text" value={this.state.search} onChange={this.searchUpdate} style={this.props.isLoading ? {opacity: '0.4'} : {opacity: ''}}/>
					<button className="searchBtn" onClick={this.startSearch}><i className="fas fa-search" style={this.props.isLoading ? {animation: 'loading 1s infinite linear'} : {animation: ''}} ></i></button>
				</form>
			</div>
		)
	}
};

export default Search;