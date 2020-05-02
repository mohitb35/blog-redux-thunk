export default (state = [], action) => {
	console.log(action);

	/* if (action.type = 'FETCH_POSTS') {
		return action.payload
	};

	return state; */

	// the switch statements below do the same as the code commented out above, and are more commonly used
	switch (action.type) {
		case 'FETCH_POSTS':
			return action.payload;
	
		default:
			return state;
	}
};