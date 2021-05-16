import React from "react";
import Counter from "./Counter";
import { connect } from "react-redux";
import {
	increment,
	decrement,
	inputNumber,
	inputNumberChange,
} from "../actions/index";

class App extends React.Component {
	render() {
		return (
			<div>
				<h3>Counter</h3>
				<Counter
					count={this.props.count}
					onIncrement={this.props.onIncrement}
					onDecrement={this.props.onDecrement}
					onInputNumber={this.props.onInputNumber}
					onInputNumberChange={this.props.onInputNumberChange}
					buttonClicked={this.props.buttonClicked}
				/>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onIncrement: () => dispatch(increment()),
		onDecrement: () => dispatch(decrement()),
		onInputNumber: () => dispatch(inputNumber()),
		onInputNumberChange: number => dispatch(inputNumberChange(number)),
	};
}
function mapStateToProps(state) {
	return {
		count: state.count,
		buttonClicked: state.buttonClicked,
		numberInputted: state.numberInputted,
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
