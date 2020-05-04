export default (state = [], action) => {
	// reducer state is always the part of state that it manages, as defined in combineReducer.
	console.log(state);

	switch (action.type) {
		case 'FETCH_USERS':
			return [...state, action.payload];
	
		default:
			return state;
	}
};