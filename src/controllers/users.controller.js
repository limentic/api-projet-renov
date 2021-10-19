const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = {
	async create(ctx) {
		try {
			await ctx.db.Users.create({
				first_name: ctx.request.body.first_name,
				last_name: ctx.request.body.last_name,
				email: ctx.request.body.email,
				customerId: ctx.request.body.customerId,
			})
			ctx.response.status = 201
			console.log('ggg')
			ctx.body = `New user added with the name: ${ctx.request.body.first_name}`
		} catch (err) {
			ctx.throw(500, err)
		}
	},

	async findAll(ctx) {
		try {
			ctx.body = await ctx.db.Users.findAll({})
		} catch (err) {
			ctx.throw(500, err)
		}
	},

	async findOne(ctx) {
		try {
			const user = await ctx.db.Users.findOne({
				where: {
					id: {
						[Op.eq]: ctx.params.id,
					},
				},
			})
			if (!user) {
				ctx.throw(404, 'User not found')
			}

			ctx.body = user
		} catch (err) {
			ctx.throw(500, err)
		}
	},

	async update(ctx) {
		try {
			const results = await ctx.db.Users.update(
				{
					first_name: ctx.request.body.first_name,
					last_name: ctx.request.body.last_name,
					email: ctx.request.body.email,
					customerId: ctx.request.body.customerId,
				},
				{
					where: {
						id: {
							[Op.eq]: ctx.params.id,
						},
					},
				}
			)

			results === 0
				? ctx.throw(404, 'User not found')
				: (ctx.body = `User with the ID: ${ctx.params.id} has been updated`)
		} catch (err) {
			ctx.throw(500, err)
		}
	},

	async delete(ctx) {
		try {
			const results = await ctx.db.Users.destroy({
				where: {
					id: {
						[Op.eq]: ctx.params.id,
					},
				},
			})

			results === 0
				? ctx.throw(404, 'User not found')
				: (ctx.body = `User with the ID: ${ctx.params.id} has been deleted`)
		} catch (err) {
			ctx.throw(500, err)
		}
	},
}
