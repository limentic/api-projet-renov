const Sequelize = require('sequelize')

/* 
The object inside NODE_ENV_RENOV looks exactly like that:
{
  env: 'XXX', ('prod' | 'dev')
  username: 'XXX',
  database: 'XXX',
  password: 'XXX',
  host: '0.0.0.0:0000',
  dialect: 'postgres'
}

If you want to change the database from postgres to another mysql for exemple, 
go look at the documentation over here: 
https://sequelize.org/master/manual/getting-started.html

*/
const config = JSON.parse(process.env.NODE_ENV_RENOV)

module.exports = new Sequelize(
	config.database,
	config.username,
	config.password,
	{
		host: config.host,
		dialect: config.dialect,

		pool: {
			max: 5,
			min: 0,
			acquire: 30000,
			idle: 10000
		}
	}
)
