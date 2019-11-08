// Importing Dependencies
import React from 'react';

// Importing Components
import NavBar from '../components/NavBar';

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
		fetch(process.env.REACT_APP_API_URL + 'users')
			.then(result => {
				return result.json();
			})
			.then(data => {
				console.log(data);
				let temp = data.map(this.map_comments);
				this.setState({
					comments: temp,
				});
			});
	}
	map_comments = data => {
		return (
			<div className="comment_div" key={Math.random() * 9}>
				<div className="comment_body">{data.email}</div>
			</div>
		);
	};
	render() {
		return (
			<div className="Comments">
				<NavBar />
				<div className="container_lg">
					<div className="header">Comments</div>
					<div className="container_body">{this.state.comments}</div>
				</div>
			</div>
		);
	}
}

export default Comments;
