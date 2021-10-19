const Koa = require('koa'),
	koaBody = require('koa-body')

const app = new Koa()

const PORT = 4000

const api = require('./src/routes/routes.js')
const db = require('./src/config/database.js')
const models = require('./src/models')

db.authenticate()
	.then(() => console.log('Database connected...'))
	.catch((err) => console.log('Error: ' + err))
app.context.db = models

app
	.use(koaBody())
	.use(api.routes())
app.listen(PORT, () => console.log(`REST API running on http://localhost:${PORT}`))
