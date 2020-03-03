import React from 'react';

class HealthLabel extends React.Component {
	constructor(props) {
		super(props);
		//Variable for matching API tags to FontAwesome Icons
		this.healthImages = [
			{'Alcohol-Free': 'fas fa-wine-bottle'},
			{'Celery-Free': 'fas fa-seedling'},
			{'Crustacean-Free': 'fas fa-fish'},
			{'Dairy-Free': 'fas fa-cheese'},
			{'Egg-Free': 'fas fa-egg'},
			{'Fish-Free': 'fas fa-fish'},
			{'FODMAP-Free': 'fas fa-bread-slice'},
			{'Gluten-Free': 'fas fa-bread-slice'},
			{'Keto-Friendly': 'fas fa-bacon'},
			{'Kidney-Friendly': 'fas fa-heart'},
			{'Kosher': 'fas fa-hamburger'},
			{'Low-Potassium': 'fas fa-apple-alt'},
			{'Lupine-Free': 'fas fa-seedling'},
			{'Mustard-Free': 'fas fa-pepper-hot'},
			{'Low-Fat-Abs': 'fas fa-drumstick-bite'},
			{'No-Oil-Added': 'fas fa-tint'},
			{'Low-Sugar': 'fas fa-pepper-hot'},
			{'Paleo': 'fas fa-seedling'},
			{'Peanut-Free': 'fas fa-seedling'},
			{'Pecatarian': 'fas fa-seedling'},
			{'Pork-Free': 'fas fa-bacon'},
			{'Red-Meat-Free': 'fas fa-hamburger'},
			{'Sesame-Free': 'fas fa-seedling'},
			{'Shellfish-Free': 'fas fa-fish'},
			{'Soy-Free': 'fas fa-tint'},
			{'Sugar-Conscious': 'fas fa-pepper-hot'},
			{'Tree-Nut-Free': 'fas fa-seedling'},
			{'Vegan': 'fas fa-carrot'},
			{'Vegetarian': 'fas fa-carrot'},
			{'Wheat-Free': 'fas fa-bread-slice'},
			{'Alcohol-Cocktail': 'fas fa-wine-bottle'}
		]
	}
	//Gets icon based on health tags
	findIcon = () => {
		for (let i = 0; i < this.healthImages.length; i++) {
			if (this.healthImages[i][this.props.healthText]) {
				return this.healthImages[i][this.props.healthText]
			}
			else {}
		}
	}
	render() {
		return (
			<div 
				className="healthLabel"
				name={this.props.healthText}
				style={{animation: `fadeIn 0.25s ease-in-out calc(350ms + (${Math.random()} * 500ms))`, animationFillMode: "both"}}
			>
				<i className={this.findIcon()}/><p>{this.props.healthText}</p>
			</div>
		)
	}
};

export default HealthLabel;