const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	body: {
		type: String,
		required: true,
		timestamps: true,
	},
	time: {
		type: String,
		required: true,
	}
});

module.exports = mongoose.model('Comment', commentSchema);
