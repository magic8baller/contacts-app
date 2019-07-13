const router = require('express').Router()

/**
 * @route GET api/contacts
 * @desc Get all User contacts
 * @access Private
 */
router.get('/', (req, res) => {
	res.send('get logged in user')
});

/**
 * @route POST api/contacts
 * @desc add contact to User db
 * @access Private
 */
router.post('/', (req, res) => {
	res.send('add contact')
});

/**
 * @route PUT api/contacts/:contact_id
 * @desc update contact in User db
 * @access Private
 */
router.put('/:id', (req, res) => {
	res.send('update contact')
});
/**
 * @route DELETE api/contacts/:contact_id
 * @desc delete contact in User db
 * @access Private
 */
router.delete('/:id', (req, res) => {
	res.send('delete a contact')
});

module.exports = router;