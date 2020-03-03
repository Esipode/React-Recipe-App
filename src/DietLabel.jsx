import React from 'react';

class DietLabel extends React.Component {
	constructor(props) {
		super(props);
		//Variable for matching API tags to FontAwesome Icons
		this.dietImages = [
			{'Balanced': 'fas fa-balance-scale-left'},
			{'High-Fiber': 'fas fa-carrot'},
			{'High-Protein': 'fas fa-egg'},
			{'Low-Carb': 'fas fa-bread-slice'},
			{'Low-Fat': 'fas fa-drumstick-bite'},
			{'Low-Sodium': 'fas fa-hotdog'}
		]
	}
	//Gets icon based on diet tags
	findIcon = () => {
		for (let i = 0; i < this.dietImages.length; i++) {
			if (this.dietImages[i][this.props.dietText]) {
				return this.dietImages[i][this.props.dietText]
			}
			else {}
		}
	}
	render() {
		return (
			<div 
				className="dietLabel"
				name={this.props.dietText}
				style={{animation: `fadeIn 0.25s ease-in-out calc(350ms + (${Math.random()} * 25ms))`, animationFillMode: "both"}}
			>
				<i className={this.findIcon()}/><p>{this.props.dietText}</p>
			</div>
		)
	}
};

export default DietLabel;