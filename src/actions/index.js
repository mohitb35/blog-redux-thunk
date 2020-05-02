import jsonPlaceholder from '../apis/jsonPlaceholder';

// Action creators

/* export const fetchPosts = () => {
	return async function(dispatch, getState) {
		const response = await jsonPlaceholder.get('/posts');

		// Dispatching action
		dispatch ({
			type: 'FETCH_POSTS',
			payload: response
		});
	}
}; */ //See refactored code below


// Refactored -- removed getState argument (unnecessary), 
// parenthesis around returned function arguments as it has only one argument
// parenthesis around main function as it consists of a single return statement
export const fetchPosts = () => async dispatch =>  {
	const response = await jsonPlaceholder.get('/posts');
	
	// Dispatching action
	dispatch ({
		type: 'FETCH_POSTS',
		payload: response.data
	});
};
