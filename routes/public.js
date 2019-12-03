var express = require('express');
var router = express.Router();
const graphqlHTTP = require('express-graphql')
const { rootValue, schema } = require('../graphql/twitterql')

router.use('/public', graphqlHTTP({
	rootValue, schema, graphiql: true
}))

module.exports = router;