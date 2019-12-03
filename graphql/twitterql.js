const { graphql, buildSchema } = require('graphql')
const InformationController = require('../control/information')

const schema = buildSchema(`
	type Query {
		tweets: [Tweet],
		tweet(id_tweet: String): Tweet
	}
	type Tweet {
		id: Int,
		username: String
		id_tweet: String,
		text: String,
		hastag: String
	}

`)

const rootValue = {
	tweets: () => InformationController.findAll(),
	tweet: (_, { body }) => InformationController.find(body.variables.id)
}

module.exports = {
	rootValue, 
	schema
}