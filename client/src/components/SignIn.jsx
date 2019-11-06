// Importing Dependencies
import React from 'react';
import { Form, Button } from 'react-bootstrap';

// Importing Components

// Importing Styling
import './SignIn.css';

const SignIn = props => {
	return (
		<div className="signIn">
			<div className="container">
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
							Sign in
						</Button>
					</Form>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
