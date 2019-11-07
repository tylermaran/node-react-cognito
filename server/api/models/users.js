const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	name: {
		type: String,
		required: true,
		timestamps: true,
	},
	email: {
		type: String,
		required: true,
	},
	validated: {
		type: Boolean,
		required: true,
		default: false
	}
});

module.exports = mongoose.model('User', userSchema);
