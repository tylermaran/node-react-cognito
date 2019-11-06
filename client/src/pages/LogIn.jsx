// Importing Dependencies
import React from 'react';
import { Form, Button } from 'react-bootstrap';

// Importing Components
import NavBar from '../components/NavBar';

// Importing Styling
import './LogIn.css';

const LogIn = props => {
	return (
		<div className="LogIn">
			<NavBar/>
			<div className="container_sm">
				<div className="header">Log in</div>
				<div className="container_body">
					<Form>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email address:</Form.Label>
							<Form.Control
								type="email"
								placeholder="Enter email"
							/>
						</Form.Group>

						<Form.Group controlId="formBasicPassword">
							<Form.Label>Password:</Form.Label>
							<Form.Control
								type="password"
								placeholder="Password"
							/>
						</Form.Group>
						<Form.Group controlId="formBasicCheckbox">
							<Form.Check type="checkbox" label="Remember me" />
						</Form.Group>
						<Button variant="primary" type="button" className="submit_button">
							Log in
						</Button>
					</Form>
				</div>
			</div>
		</div>
	);
};

export default LogIn;
