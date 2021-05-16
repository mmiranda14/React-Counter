const initialState = {
	count: 0,
	numberInputted: 0,
	buttonClicked: 0,
};

function counterReducer(state = initialState, action) {
	switch (action.type) {
		case "INCREMENT":
			return {
				...state,
				count: state.count + 1,
				buttonClicked: state.buttonClicked + 1,
			};
		case "DECREMENT":
			return {
				...state,
				count: state.count - 1,
				buttonClicked: state.buttonClicked + 1,
			};
		case "INPUT_NUMBER_CHANGE":
			return {
				...state,
				numberInputted: action.number,
			};
		case "INPUT_NUMBER":
			return {
				...state,
				count: parseInt(state.numberInputted),
				buttonClicked: 0,
				numberInputted: null,
			};
		default:
			return state;
	}
}

export default counterReducer;
