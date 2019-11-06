// Importing Dependencies
import React from 'react';
import { Form, Button } from 'react-bootstrap';

// Importing Components
import NavBar from '../components/NavBar';

// Importing Styling
import './SignUp.css';

const SignUp = props => {
	const requirements = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

	const handle_signup = e => {
		const form = e.currentTarget;

		form.checkValidity();
	};

	const match_password = () => {
		let pass1 = document.getElementById('password1');
		let pass2 = document.getElementById('password2');
		document.getElementById('submit_button').disabled = true;

		if (requirements.test(pass1.value)) {
			console.log('Strong');

			if (pass1.value === pass2.value && pass2.value.length > 0) {
				document.getElementById('password2').style.borderColor =
					'#ced4da';
				document.getElementById('submit_button').disabled = false;
			} else {
				console.log('passwords do not match');
				document.getElementById('password2').style.borderColor =
					'#E34234';
			}
		} else {
			console.log('Weak');
		}
	};

	return (
		<div className="SignUp">
			<NavBar />
			<div className="container_sm">
				<div className="header">Sign Up</div>
				<div className="container_body">
					<Form onSubmit={e => handle_signup(e)}>
						<Form.Group controlId="name">
							<Form.Label>Name:</Form.Label>
							<Form.Control
								required
								type="text"
								placeholder="Username"
							/>
						</Form.Group>
						<Form.Group controlId="email">
							<Form.Label>Email address:</Form.Label>
							<Form.Control
								required
								type="email"
								placeholder="Enter email"
							/>
							<Form.Text className="text-muted">
								We'll never share your email with anyone else.
							</Form.Text>
						</Form.Group>

						<Form.Group controlId="password1">
							<Form.Label>Password:</Form.Label>
							<Form.Control
								required
								type="password"
								placeholder="Password"
								onInput={e => match_password(e)}
							/>
							<Form.Text className="text-muted">
								Passwords must be at least 8 characters, contain
								uppercase and lowercase letters, and a number.{' '}
							</Form.Text>
						</Form.Group>
						<Form.Group controlId="password2">
							<Form.Label>Confirm Password:</Form.Label>
							<Form.Control
								required
								type="password"
								placeholder="Confirm Password"
								onInput={e => match_password(e)}
							/>
							<Form.Text className="text-muted">
								Passwords must match.{' '}
							</Form.Text>
						</Form.Group>

						<Button
							variant="primary"
							type="submit"
							id="submit_button"
							disabled
						>
							Create Account
						</Button>
					</Form>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
