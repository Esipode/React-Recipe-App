import React from 'react';

class Difficulty extends React.Component {
	//Sets a recipe's difficulty value based on number of ingredients
	calcDifficulty = (difficulty) => {
		switch (true) {
			case this.props.difficulty <= 2:
				return "Simple";
			case this.props.difficulty <= 5:
				return "Basic";
			case this.props.difficulty <= 8:
				return "Moderate";
			case this.props.difficulty <= 13:
				return "Advanced";
			case this.props.difficulty > 13:
				return "Expert";
			default:
			 return
		}
		
	}
	render() {
		return (
			<div
				className={`diff${this.calcDifficulty()}`}
			>
				<i className='fas fa-user'></i><p>{this.calcDifficulty()}</p>
			</div>
		)
	}
};

export default Difficulty;