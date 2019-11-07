const User = require('../models/users');
const mongoose = require('mongoose');

// G1: GET All
exports.get_all_users = (req, res, next) => {
	User.find()
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

exports.post_new_user = (req, res, next) => {
	console.log('post request to /users');
	console.log(req.body);
	// Preventing Duplicate Users - search by name
	User.findOne({
		email: req.body.name,
	})
		.exec()
		.then(result => {
			// Add in name and file validation (since people may have similar file names)
			if (result && result.email === req.body.email) {
				console.log('Error Duplication: ' + req.body.name);
				res.status(500).json({
					error: 'Error: User name is a duplication',
					detail: 'Already user with email: ' + result.email,
				});
			} else {
				// Create new club object from body data
				const user = new User({
					_id: new mongoose.Types.ObjectId(),
					name: req.body.name,
					email: req.body.email,
				});

				// Save new User to DB
				user.save()
					.then(result => {
						console.log(result);
						res.status(200).json({
							message: 'New user Created',
							result: result,
						});
					})
					.catch(err => {
						res.status(500).json({
							error: err,
						});
					});
			}
		});
};
