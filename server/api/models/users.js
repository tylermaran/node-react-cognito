const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	name: {
		// Design
		type: String,
		required: true,
		timestamps: true,
	}
});

module.exports = mongoose.model('User', userSchema);
