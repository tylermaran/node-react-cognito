// Importing Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// Importing Components

// Importing Styling
import './NavBar.css';

const NavBar = props => {
	return (
		<div className="navbar">
			<div className="nav_content">
				<div className="nav_item">
					{' '}
					<Link to="/">Home</Link>
				</div>
				<div className="nav_item">
					{' '}
					<Link to="/users">Users</Link>
				</div>
				<div className="nav_item">
					{' '}
					<Link to="/sign-up">Sign up</Link>
				</div>
				<div className="nav_item">
					{' '}
					<Link to="/log-in">Log in</Link>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
