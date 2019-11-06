// Importing Dependencies
import React from 'react';

// Importing Components
import NavBar from '../components/NavBar';
import SignIn from '../components/SignIn';

// Importing Styling
import './Landing.css';

const Landing = props => {
	return (
		<div className="landing">
            <NavBar/>
            <SignIn/>
		</div>
	);
};

export default Landing;
