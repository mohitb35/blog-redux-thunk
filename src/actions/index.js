import _ from 'lodash';

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

/* export const fetchUsers = (id) => async dispatch =>  {
	const response = await jsonPlaceholder.get(`/users/${id}`);

	// Dispatching action
	dispatch ({
		type: 'FETCH_USERS',
		payload: response.data
	});
}; */



export const fetchUser = (id) => dispatch =>  {
	_fetchUser(id, dispatch);
};

const _fetchUser = _.memoize( async (id, dispatch) =>  {
	const response = await jsonPlaceholder.get(`/users/${id}`);

	// Dispatching action
	dispatch ({
		type: 'FETCH_USERS',
		payload: response.data
	});
});