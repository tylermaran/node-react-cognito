// Importing Dependencies
import React, { Component } from 'react';

// Importing Components
import NavBar from '../components/NavBar';

// Importing Styling
import './Users.css';

class Users extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: '',
		};
	}
	componentDidMount() {
		fetch(process.env.REACT_APP_API_URL + 'users')
			.then(result => {
				return result.json();
			})
			.then(data => {
				console.log(data);
				let temp = data.map(this.map_users);
				this.setState({
					users: temp,
				});
			});
	}
	map_users = data => {
		return (
			<div className="user_div" key={Math.random() * 9}>
				<div className="user_email">{data.email}</div>
				<div className="email_validated">{data.validated? <div style={{'color':'#12f62d'}}>true</div>: <div style={{'color':'#f61712'}}>false</div>}</div>
			</div>
		);
	};

	render() {
		return (
			<div className="Users">
				<NavBar />
				<div className="container_sm">
					<div className="header">Users</div>
				
					<div className="container_body">
					<div className="email">
						Email
					</div>
					<div className="valid">
						Validated
					</div>
					{this.state.users}</div>
				</div>
			</div>
		);
	}
}

export default Users;
