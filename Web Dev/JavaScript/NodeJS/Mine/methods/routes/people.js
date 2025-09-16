const express = require('express');
const router = express.Router();
const {
	getPeople,
	createPerson,
	createPersonPostman,
	updatePerson,
	deletePerson,
} = require('../controllers/people.js');

//-----------------------------------------------
//FIRST APROACH

//GET
router.get('/', getPeople);

//POST + FRONT
router.post('/', createPerson);

//POST + POSTMAN
router.post('/postman', createPersonPostman);

//PUT
router.put('/:id', updatePerson);

//DELETE
router.delete('/:id', deletePerson);

//-----------------------------------------------
//SECOND APROACH

if (false) {
	router.route('/').get(getPeople).post(createPerson);
	router.route('/postman').post(createPersonPostman);
	router.route('/:id').put(updatePerson).delete(deletePerson);
}

module.exports = router;
