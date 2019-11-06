// Importing Dependencies
import React from 'react';

// Importing Components
import NavBar from '../components/NavBar';

// Importing Styling
import './Users.css';

const Users = props => {
	return (
		<div className="Users">
			<NavBar />
			<div className="container_sm">
				<div className="header">Users</div>
				<div className="container_body"></div>
			</div>
		</div>
	);
};

export default Users;
