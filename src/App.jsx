import React from 'react';
import Search from './Search';
import Recipes from './Recipes';
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
	//Pull recipes from API
	getRecipes = async (searchValue) => {
		//If search result is same as previous, do nothing
		if (searchValue === this.state.prevSearch) {
			return
		}
		else {
			try {
				//Start loading animation in search bar
				this.setState({
					displayLoading: true
				})
				//Get API Key
				const appID = process.env.REACT_APP_RECIPE_API_ID;
				const appKey = process.env.REACT_APP_RECIPE_API_KEY;
				//Search for recipes
				const response = await fetch(`https://api.edamam.com/search?q=${searchValue}&app_id=${appID}&app_key=${appKey}`);
				const data = await response.json();
				//If no recipes are returned, display message
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
				//Store search results in state
				this.setState({
					curRecipes: data.hits,
					prevSearch: searchValue
				})
			}
			//Alert if API throws error while fetching
			catch(err) {
				alert(err);
			}
			//Stop loading animation in search bar
			this.setState({
				displayLoading: false
			})
		}
	}
	//Create unique IDs
	generateKey() {
		let result = '';
		var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		var charactersLength = characters.length;
		for ( var i = 0; i < 8; i++ ) {
		  result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	}
	render() {
		return (
		  <div className="App">
			<h2 className="noRecipes" style={this.state.noRecipes ? {display: 'block'} : {display: 'none'}}>Could not find any recipes!</h2>
			<Search
				getRecipeCallback={this.getRecipes}
				isLoading={this.state.displayLoading}
			/>
			<div className="recipeContainer">
				{this.state.curRecipes.map((recipe, index) => (
					<Recipes 
						animationOrder={index}
						info={recipe.recipe}
						key={recipe.recipe.label + ' ' + this.generateKey()}
						isLoading={this.state.displayLoading}
						difficulty={recipe.recipe.ingredients.length}
					/>
				))}
			</div>
		  </div>
		)
	}
};

export default App;
