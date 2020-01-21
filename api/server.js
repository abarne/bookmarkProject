const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRouter = require('../auth/auth-router.js');
const mainRouter = require('../data/mainCategory/main-router.js');
const subRouter = require('../data/subCategory/sub-router.js');
const linkRouter = require('../data/links/link-router.js');

const server = express();

////start postgres
const { Pool, Client } = require('pg');
const connectionString =
	'postgres://rltzgeqvynynbu:5b6d253a56e65183a8ecb6fbd489543e2ea117e6d9448ecc227bccffae8fb31e@ec2-23-21-13-88.compute-1.amazonaws.com:5432/de3i0svfirhp2p';
const pool = new Pool({
	connectionString: connectionString
});
pool.query('SELECT NOW()', (err, res) => {
	console.log(err, res);
	pool.end();
});
const client = new Client({
	connectionString: connectionString
});
client.connect();
client.query('SELECT NOW()', (err, res) => {
	console.log(err, res);
	client.end();
});

///end postgres

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/main', mainRouter);
server.use('/api/sub', subRouter);
server.use('/api/link', linkRouter);

server.get('/', (req, res) => {
	res.status(200).json({ message: 'server is working' });
});

module.exports = server;
