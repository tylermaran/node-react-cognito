// Importing Dependencies
import React from 'react';

// Importing Components
import NavBar from '../components/NavBar';

// Importing Styling
import './Comments.css';

const Comments = props => {
	return (
		<div className="Comments">
			<NavBar />
			<div className="container_lg">
				<div className="header">Comments</div>
				<div className="container_body"></div>
			</div>
		</div>
	);
};

export default Comments;
