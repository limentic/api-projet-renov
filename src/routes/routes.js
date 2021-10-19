const Router = require('koa-router')

// Prefix all routes with: /api
const router = new Router({
	prefix: '/api'
})

const controllerUser = require('../controllers/users.controller.js')

router.get('/users', controllerUser.findAll)
router.post('/users', controllerUser.create)
// router.put('/users/:id', controllerUser.update)
// router.delete('/users/:id', controllerUser.delete)

module.exports = router
