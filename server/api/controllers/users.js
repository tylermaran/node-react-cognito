const User = require('../models/users');
// const mongoose = require('mongoose');

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