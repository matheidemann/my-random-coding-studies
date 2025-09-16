const autorizhe = (req, res, next) => {
	const { user } = req.query;

	if (user) {
		req.user = { name: 'random user', id: 0 };
		next();
	} else {
		res.status(401).send('401 - Unautorizhed');
	}
	console.log('autorizhe');
};

module.exports = autorizhe;
