const Comment = require('../models/comments');
const mongoose = require('mongoose');

// G1: GET All
exports.get_all_comments = (req, res, next) => {
	Comment.find()
		.select()
		.exec()
		.then(result => {
			console.log(result);
			res.status(200).json(result);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({
				error: err,
			});
		});
};

exports.post_new_comment = (req, res, next) => {
	console.log('post request to /comments');
	console.log(req.body);

	// No duplication prevention needed here
	let date = new Date();
	let dd = date.getDate();
	let mm = date.getMonth() + 1; //January is 0!

	let yyyy = date.getFullYear();
	if (dd < 10) {
		dd = '0' + dd;
	}
	if (mm < 10) {
		mm = '0' + mm;
	}
	date = dd + '/' + mm + '/' + yyyy;

	let time = Date.now();

	// Create new club object from body data
	const comment = new Comment({
		_id: new mongoose.Types.ObjectId(),
		body: req.body.body,
		time: time,
		date: date,
	});

	// Save new Comment to DB
	comment
		.save()
		.then(result => {
			console.log(result);
			res.status(200).json({
				message: 'New comment Created',
				result: result,
			});
		})
		.catch(err => {
			res.status(500).json({
				error: err,
			});
		});
};
