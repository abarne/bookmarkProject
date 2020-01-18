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
		connection: 'de3i0svfirhp2p',
		migrations: {
			directory: './database/migrations'
		}
	}
};
