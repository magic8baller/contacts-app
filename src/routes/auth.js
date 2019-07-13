const router = require('express').Router()

/**
 * @route GET api/auth
 * @desc Get logged in user
 * @accesss Private
 */
router.get('/', (req, res) => {
	res.send('get logged in user')
});

/**
 * @route POST api/auth
 * @desc authenticate user & get token so can access private routes
 * @accesss Public
 */
router.post('/', (req, res) => {
	res.send('log in user')
});

module.exports = router;