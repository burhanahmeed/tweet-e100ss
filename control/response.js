module.exports = {
	ok: (value, res) => {
		res.status(200).json({
			status: 200,
			data: value
		})
	}
}