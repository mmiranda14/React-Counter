import React from "react";

const Counter = ({
	count,
	onDecrement,
	onIncrement,
	onInputNumberChange,
	numberInputted,
	onInputNumber,
	buttonClicked,
}) => {
	return (
		<div>
			<div>
				<button onClick={onDecrement}>-</button>
				<span>{count}</span>
				<button onClick={onIncrement}>+</button>
				<br />
				<input
					type="text"
					onChange={event => onInputNumberChange(event.target.value)}
					value={numberInputted}
				/>
				<button onClick={onInputNumber}>Change Count</button>
				<br />
				<h3>
					Number of times increment/decrement buttons have button clicked:
					{buttonClicked}
				</h3>
			</div>
		</div>
	);
};

export default Counter;
