import React from 'react';

import { connect } from 'react-redux';

import { fetchUsers } from '../actions';

class UserHeader extends React.Component {
	componentDidMount() {
		this.props.fetchUsers(this.props.userId);
	}

	render() {
		const { user } = this.props;

		if(user){
			return (
				<div className="header">{user.name}</div>
			)
		}

		return null;
		
	}
}

const mapStateToProps = (state, ownProps) => {
	// return { users: state.users };

	// refactor to move user filtering logic to mapStateToProps, so that only a single user is passed as prop. 
	// To access user Id, we introduce ownProps which is the second argument to mapStateToProps
	return {
		user: state.users.find((user) => user.id === ownProps.userId)
	};
};

export default connect(
	mapStateToProps,
	{ fetchUsers }
)(UserHeader);