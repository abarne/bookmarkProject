module.exports = {
	development: {
		client: 'sqlite3',
		connection: { filename: './database/auth.db3' },
		useNullAsDefault: true,
		migrations: {
			directory: './database/migrations',
			tableName: 'dbmigrations'
		},
		seeds: { directory: './database/seeds' }
	},
	production: {
		client: 'pg',
		connection: {
			database: 'de3i0svfirhp2p',
			user: 'rltzgeqvynynbu',
			password: '5b6d253a56e65183a8ecb6fbd489543e2ea117e6d9448ecc227bccffae8fb31e'
		},
		migrations: {
			directory: './database/migrations'
		}
	}
};
