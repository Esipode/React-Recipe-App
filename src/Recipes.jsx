import React from 'react';
import Ingredient from './Ingredient';
import Difficulty from './Difficulty';
import DietLabel from './DietLabel';
import HealthLabel from './HealthLabel';

class Recipes extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			appClass: this.props.isLoading ? 'recipeLoading' : 'recipeWrapper',
			expandedRecipe: false
		}
	}

	//Convert time values into Hours and minutes
	convertTime(totalTime) {
		if (this.props.info.totalTime > 60) {
			let totalMinutes = this.props.info.totalTime;
			let hours = Math.floor(totalMinutes / 60);
			let minutes = totalMinutes % 60;
			let hoursText = (hours > 1 ? 'Hrs' : 'Hr');
			totalTime = hours + ' ' + hoursText + (minutes > 0 ? ' ' + minutes + ' Min' : '');
		}
		else if (this.props.info.totalTime > 0 && this.props.info.totalTime < 1) {
			totalTime = (this.props.info.totalTime * 60) + ' Sec';
		}
		else {
			totalTime = this.props.info.totalTime + ' Min';
		}
		return totalTime;
	}

	//Grammar correction for plurals of singular numbers of people
	convertPeople(peopleText) {
		if (this.props.info.yield < 2) {
			peopleText = 'Person'
		}
		else {
			peopleText = 'People';
		}
		return peopleText;
	}

	//Shrink text when titles are too long
	textResize(fontSize) {
		if (this.props.info.label.length > 50) {
			fontSize = '12px';
		}
		else if (this.props.info.label.length > 27) {
			fontSize = '14px';
		}
		else {
			fontSize = '16px';
		}
		return fontSize;
	}

	//Toggles expansion of recipe information on click
	growRecipe = () => {
		this.state.expandedRecipe ? this.setState({expandedRecipe: false}) : this.setState({expandedRecipe: true})
	}
	
	render() {
		return (
			<div className={this.state.appClass} style={{animation: `fadeIn 0.75s ease-in-out calc(${this.props.animationOrder} * 200ms)`, animationFillMode: "both"}}>
				<div className={`labelList ${this.state.expandedRecipe ? "expanded" : ""}`}>
					<Difficulty 
						difficulty={this.props.difficulty}
						key={Math.random()}
					/>
					{this.props.info.dietLabels.map((dietLabel) => (
						<DietLabel
							className="dietLabel"
							key={Math.random()}
							dietText={dietLabel}
						/>
					))}
					{this.props.info.healthLabels.map((healthLabel) => (
						<HealthLabel
							className="healthLabel"
							key={Math.random()}
							healthText={healthLabel}
						/>
					))}
				</div>
				<div className="recipe">
					<h1 className="recipeName" style={{fontSize: this.textResize()}}>{this.props.info.label}</h1>
					<div className="card">
						<img 
							className="recipeImg"
							src={this.props.info.image}
							alt={this.props.info.label}
							draggable="false"
							onError={(e) => e.target.src="/placeholder-food.png"}
						/>
					</div>
					<div className="infoContainer">
						<p className="timeCount" style={{display: this.props.info.totalTime > 0 ? 'block' : 'none'}}><i className="fas fa-clock"></i>{this.convertTime()}</p>
						<p className="calorieCount"><i className="fas fa-leaf"></i>{(this.props.info.calories / this.props.info.yield).toFixed(0)} Calories</p>
						<p className="peopleCount"><i className="fas fa-users"></i>{this.props.info.yield} {this.convertPeople()}</p>
					</div>
				</div>
				<i className="info fas fa-info-circle" onClick={this.growRecipe}/>
				<ul className={`ingredientList ${this.state.expandedRecipe ? "expanded" : ""}`}>
					{this.props.info.ingredients.map((ingredient, index) => (
						<Ingredient
							className="ingredient"
							key={Math.random()}
							animationOrderIngr={index}
							text={ingredient.text}
						/>
					))}
				</ul>
			</div>
		)
	}
};

export default Recipes;