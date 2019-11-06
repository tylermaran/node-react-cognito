// Importing Dependencies
import React from 'react';

// Importing Components
import NavBar from '../components/NavBar';

// Importing Styling
import './NoMatch.css';

const NoMatch = props => {
	return (
		<div className="NoMatch">
            <NavBar/>
            <div className="turn_back">
                Turn back traveler. There's nothing here.
            </div>
		</div>
	);
};

export default NoMatch;
