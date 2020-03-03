import React from 'react';

class Ingredient extends React.Component {
	render() {
		return (
			<li
				className="ingredient"
				key={Math.random()}
				style={{animation: `fadeIn 0.25s ease-in-out calc(300ms + (${this.props.animationOrderIngr}) * 100ms)`, animationFillMode: "both"}}
			>
				{this.props.text}
			</li>
		)
	}
};

export default Ingredient;