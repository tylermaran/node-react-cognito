const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

// Require .env for secrets
require('dotenv').config();

// Requiring CORS package and allowing localhost:4000 to access - will update to www.clubfinder.com
const cors = require('cors');
var corsOptions = {
	origin: 'http://localhost:3000',
	origin: true,
	credentials: true,
	allowedHeaders: ['Content-Type'],
};
app.use(cors(corsOptions));

// Connect to Mongodb
mongoose.connect(
	'mongodb+srv://demo:' +
		process.env.MONGO_PW +
		'@node-react-cognito-nplux.mongodb.net/test?retryWrites=true&w=majority',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true
	}
);
mongoose.set('useFindAndModify', false);

// importing routes
const userRoutes = require('./api/routes/users');

// running bodyparser - apparently no longer necessary in newer version of Express
app.use(
	bodyParser.urlencoded({
		extended: false,
	})
);
app.use(bodyParser.json());

// Direct towards route handler
app.use('/users', userRoutes);

app.use('/', (req, res, next) => {
	res.status(200).json({
		message: 'Node / React / Cognito App',
	});
});

// Error handling: if you reach this line, it is because the request did not meet any of the prior routes
app.use((req, res, next) => {
	const error = new Error('Not Found');
	error.status = 404;
	// forward the error
	next(error);
});

// This allows us to throw errors from anywhere in the app
app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		error: {
			message: error.message,
		},
	});
});

module.exports = app;
