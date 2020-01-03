const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRouter = require('../auth/auth-router.js');
const mainRouter = require('../data/mainCategory/main-router.js');
const subRouter = require('../data/subCategory/sub-router.js');
const linkRouter = require('../data/links/link-router.js');

const server = express();

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
