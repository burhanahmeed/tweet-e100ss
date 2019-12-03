const Twitter = require('../database/twitter')

module.exports = {
	findAll: async () => {
		try {
			let allData = await Twitter.getAll()
			// console.log(allData)
			return allData
		} catch (e) {
			// console.log(e)
			return e
		}
	},
	find: async (params) => {
		try {
			let data = await Twitter.get({ id: params })
			// console.log(data)
			return data[0]
		} catch (e) {
			// console.log(e)
			return e
		}
	}
}