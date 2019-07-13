const router = require('express').Router()
/**
 * @route GET /api/users
 * @desc register new User
 * @access PUBLIC
 */
router.post('/', (req, res) => {
	res.send('register 1 user')
})

module.exports = router