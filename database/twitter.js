const connection = require('./index')

module.exports = {
	insert: (params) => {
		return new Promise((resolve, reject) => {
			var query = `INSERT INTO twitter (username, id_tweet, text, hastag, tweet_img, tweet_time) values (?,?,?,?,?,?)`
			var value = [params.username, params.id_tweet, params.text, params.hastag, params.tweet_img, params.tweet_time]
			connection.query(query, value, function (error, rows){
		        if(error){
		            // console.log(error)
		            reject(error)
		        } else{
		            resolve(rows)
		        }
		    })
		})
	},
	get: (params) => {
		return new Promise((resolve, reject) => {
			connection.query(`SELECT * FROM twitter WHERE id_tweet=${params.id}`, function (error, rows){
		        if(error){
		            // console.log(error)
		            reject(error)
		        } else{
		            resolve(rows)
		        }
		    })
		})
	}
}