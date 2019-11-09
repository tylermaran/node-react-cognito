// Importing Dependencies
import React from 'react';
import { Button } from 'react-bootstrap';

// Importing Styling
import './AddComment.css';

const AddComment = props => {
	const add_comment = () => {
		let comment = document.getElementById('comment_box');

		if (comment.value !== '') {
			props.function(comment.value);
			comment.value = '';
		}
	};

	const check_key = e => {
		if (e.keyCode === 13) {
			add_comment();
		}
	};

	return (
		<div className="AddComment" onKeyDown={e => check_key(e)}>
			<input type="text" className="comment_box" id="comment_box" />
			<div className="submit_comment">
				<Button
					type="button"
					className="comment_button"
					onClick={() => add_comment()}
				>
					Send
				</Button>
			</div>
		</div>
	);
};

export default AddComment;
