// import _ from 'lodash';

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

export const fetchUser = (id) => async dispatch =>  {
	const response = await jsonPlaceholder.get(`/users/${id}`);

	// Dispatching action
	dispatch ({
		type: 'FETCH_USERS',
		payload: response.data
	});
};


// Memoized solution
/* export const fetchUser = (id) => dispatch =>  {
	_fetchUser(id, dispatch);
};

const _fetchUser = _.memoize( async (id, dispatch) =>  {
	const response = await jsonPlaceholder.get(`/users/${id}`);

	// Dispatching action
	dispatch ({
		type: 'FETCH_USERS',
		payload: response.data
	});
}); */

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
	// Call fetchPosts
	await dispatch(fetchPosts());

	// Get list of posts
	const posts = getState().posts;

	//const userIds = _.uniq(_.map(posts, 'userId'));
	//Using lodash, map unique user IDs

	// Using map and reduce, get unique user IDs
	/* const userIds = posts.map(post => post.userId).reduce(function(unique, id){
		if(!unique.includes(id)){
			unique.push(id);
		}
		return unique;
	},[]); */

	// Using map and Set, get unique user IDs
	const userIds = [...new Set(posts.map(post => post.userId))];
	
	// get details for each user
	userIds.forEach(id => {
		dispatch(fetchUser(id));
	})
}
