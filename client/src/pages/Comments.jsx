// Importing Dependencies
import React, { Component } from 'react';

// Importing Components
import NavBar from '../components/NavBar';
import AddComment from '../components/AddComment';

// Importing Styling
import './Comments.css';

class Comments extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: '',
		};
	}
	componentDidMount() {
		this.fetch_comments();
	}

	fetch_comments = () => {
		fetch(process.env.REACT_APP_API_URL + 'comments')
			.then(result => {
				return result.json();
			})
			.then(data => {
				let temp = data.map(this.map_comments);
				this.setState(
					{
						comments: temp,
					},
					() => {
						let element = document.getElementById('comment_list');

						element.scrollTop =
							element.scrollHeight - element.clientHeight;
					}
				);
			});
	};

	map_comments = data => {
		return (
			<div className="comment_div" key={Math.random() * 9}>
				<div className="comment_user">User</div>

				<div className="comment_bubble">
					<div className="comment_body">{data.body}</div>
				</div>
			</div>
		);
	};

	add_comment = comment => {
		let body = {
			body: comment,
		};

		fetch(process.env.REACT_APP_API_URL + 'comments', {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
			body: JSON.stringify(body),
		})
			.then(response => {
				return response.json();
			})
			.then(data => {
				this.fetch_comments();
			});
	};

	render() {
		return (
			<div className="Comments">
				<NavBar />
				<div className="container_lg">
					<div className="header">Comments</div>
					<div className="comment_body">
						<div className="comment_list" id="comment_list">
							{this.state.comments}
						</div>
						<AddComment function={this.add_comment} />
					</div>
				</div>
			</div>
		);
	}
}

export default Comments;
