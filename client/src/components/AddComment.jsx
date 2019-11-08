// Importing Dependencies
import React from 'react';
import {Button} from 'react-bootstrap';

// Importing Styling
import './AddComment.css';

const AddComment = props => {

    const add_comment = () => {
        let comment = document.getElementById('comment_box');
        console.log(comment.value);
        props.function(comment.value);
    }


	return (
		<div className="AddComment">
			<input type="text" className="comment_box" id="comment_box"/>
			<div className="submit_comment">
				<Button type="button" className="comment_button" onClick={()=> add_comment()}>Send</Button>
			</div>
		</div>
	);
};

export default AddComment;
