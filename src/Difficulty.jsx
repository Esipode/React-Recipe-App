import React from 'react';

class Difficulty extends React.Component {
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
				style={{animation: `fadeIn 0.25s ease-in-out calc(350ms + (${Math.random()} * 25ms))`, animationFillMode: "both"}}
			>
				<i className='fas fa-user'></i><p>Difficulty: {this.calcDifficulty()}</p>
			</div>
		)
	}
};

export default Difficulty;