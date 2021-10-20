const config = JSON.parse(process.env.NODE_ENV_RENOV)

module.exports = {
	development: {
		username: config.username,
		password: config.password,
		database: config.database,
		host: config.host,
		dialect: config.dialect
	},
	test: {
		username: config.username,
		password: config.password,
		database: config.database,
		host: config.host,
		dialect: config.dialect
	},
	production: {
		username: config.username,
		password: config.password,
		database: config.database,
		host: config.host,
		dialect: config.dialect
	}
}
