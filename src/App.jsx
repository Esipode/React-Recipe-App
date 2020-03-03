import React from 'react';
import './App.css'

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			curRecipes: [],
			displayLoading: false,
			noRecipes: false,
			prevSearch: ''
		}
	}
	getRecipes = async (searchValue) => {
		if (searchValue === this.state.prevSearch) {
			return
		}
		else {
			try {
				this.setState({
					displayLoading: true
				})
				const appID = process.env.REACT_APP_RECIPE_API_ID;
				const appKey = process.env.REACT_APP_RECIPE_API_KEY;
				const response = await fetch(`https://api.edamam.com/search?q=${searchValue}&app_id=${appID}&app_key=${appKey}`);
				const data = await response.json();
				if (data.count < 1) {
					this.setState({
						noRecipes: true
					})
					setTimeout(() => {
						this.setState({
							noRecipes: false
						})
					}, 2000);
				}
				this.setState({
					curRecipes: data.hits,
					prevSearch: searchValue
				})
			}
			catch(err) {
				alert(err);
			}
			this.setState({
				displayLoading: false
			})
		}
	}
	render() {
		return (
		  <div className="App">
				<Search getRecipeCallback={this.getRecipes} isLoading={this.state.displayLoading} />
		  </div>
		)
	}
};

export default App;