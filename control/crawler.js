const axios = require('axios')
const Twitter = require('../database/twitter')
const moment = require('moment')

module.exports = {
	crawl: (req, res) => {
		axios.post('https://api.twitter.com/oauth2/token', null,
		{
			auth: { username: 'zPl8F2vC3JVSiTDNEjRkr0WgA', password: 'Nx9uIrrqonvXztwDCXM7QvZEaq1ISml12A39qw7YXNWW2QckQp' },
			// headers: { 'Authorization': 'Basic ' + btoa('zPl8F2vC3JVSiTDNEjRkr0WgA' + ':' + 'Nx9uIrrqonvXztwDCXM7QvZEaq1ISml12A39qw7YXNWW2QckQp') }
			params: { grant_type: 'client_credentials' } 
		}).then(async (result) => {
			
		try {
		  let crawler = await axios.get('https://api.twitter.com/1.1/search/tweets.json', {
		    params: {
		      q: `@e100ss AND -filter:retweets`,
		      lang: 'id',
		      count: '100'
		    },
		    headers: {
		      Authorization: `Bearer ${result.data.access_token}`
		    }
		  })
		  let ssTimeline = await axios.get('https://api.twitter.com/1.1/statuses/user_timeline.json', {
		    params: {
		      screen_name: `e100ss`,
		      lang: 'id',
		      count: '10',
		      exclude_replies: true,
		      include_rts: false
		    },
		    headers: {
		      Authorization: `Bearer ${result.data.access_token}`
		    }
		  })
		  // res.json({
		  //   status: 200,
		  //   data: { statuses: ssTimeline.data }
		  // })
		  await module.exports.insertToDB(crawler.data)
		  await module.exports.insertToDB({ statuses: ssTimeline.data })

		  return true

		  // res.end()

		} catch (err) {
		  // res.status(500).json({
		  //   status: 500,
		  //   data: err
		  // })  
		  return false
		}

		}).catch(err => {
			// res.status(500).json({
			//   status: 500,
			//   data: err
			// })
			return false
		})
	},
	insertToDB: async (data) => {
		try {
			const list = data.statuses
			for (var i in list) {
				var tweet = await Twitter.get({ id: list[i].id })
				if (tweet.length == 0) {
					let hastag = ''
					let hastag_data = list[i].entities.hashtags
					if (hastag_data.length > 0) {
						hastag = []
						for (var h in hastag_data) {
							hastag.push(hastag_data[h].text)
						}
						hastag = JSON.stringify(hastag)
					}

					let date = moment(list[i].created_at, 'ddd MMM DD HH:mm:ss Z YYYY').format('YYYY-MM-DD HH:mm:ss')

					let img = ''
					if (list[i].entities.media) {
						let media = list[i].entities.media
						img = []
						for (var im in media) {
							img.push(media[im].media_url_https)
						}
						img = JSON.stringify(img)	
					}

					var insertData = {
						username: list[i].user.screen_name,
						id_tweet: list[i].id,
						text: String(list[i].text),
						hastag: hastag,
						tweet_img: img,
						tweet_time: date
					}

					// console.log(i, insertData)
					// console.log(date)

					let inserting = await Twitter.insert(insertData)
					// console.log(inserting)
				}
			}

			return true
		} catch (error) {
			console.log(error)
			return false
		}
	}
}