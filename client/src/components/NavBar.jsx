// Importing Dependencies
import React from 'react';

// Importing Components

// Importing Styling
import './NavBar.css';

const NavBar = props => {
	return (
		<div className="navbar">
			<div className="nav_content">
				<div className="nav_item">Home</div>
				<div className="nav_item">Users</div>
				<div className="nav_item">Sign in</div>

			</div>
		</div>
	);
};

export default NavBar;
