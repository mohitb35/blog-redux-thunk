import jsonPlaceholder from '../apis/jsonPlaceholder';

// Action creators

export const fetchPosts = async () => {
	// Bad code
	const response = await jsonPlaceholder.get('/posts');

	// Returning action
	return {
		type: 'FETCH_POSTS',
		payload: response
	};
};