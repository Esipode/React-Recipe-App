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
	growRecipe = () => {
		this.state.expandedRecipe ? this.setState({expandedRecipe: false}) : this.setState({expandedRecipe: true})
	}
	render() {
		return (
			<div className={this.state.appClass} style={{animation: `fadeIn 0.75s ease-in-out calc(${this.props.animationOrder} * 200ms)`, animationFillMode: "both"}}>
				<i className="info fas fa-info-circle" onClick={this.growRecipe}/>
				<div className="recipe">
					<h1 className="recipeName">{this.props.info.label}</h1>
					<div className="card">
						<img className="recipeImg" src={this.props.info.image} alt={this.props.info.label} draggable="false"/>
					</div>
					<div className={`infoContainer ${this.state.expandedRecipe ? "expanded" : ""}`}>
						<p className="timeCount" style={{display: this.props.info.totalTime > 0 ? 'block' : 'none'}}><i className="fas fa-clock"></i></p>
						<p className="calorieCount"><i className="fas fa-leaf"></i>{(this.props.info.calories / this.props.info.yield).toFixed(0)} Calories</p>
						<p className="peopleCount"><i className="fas fa-users"></i>{this.props.info.yield}</p>
					</div>
				</div>
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
				<div className={`labelList ${this.state.expandedRecipe ? "expanded" : ""}`}>
					<Difficulty 
						difficulty={this.props.difficulty}
						key={Math.random()}
					/>
				</div>
			</div>
		)
	}
};

export default Recipes;