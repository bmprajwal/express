const express = require('express')
const router = express.Router();

const { people } = require('C:\\Users\\user\\Desktop\\NodeJS\\data.js')
const {
    getPerson,
    postPerson,
    postPersonPostman,
    updatePerson,
    deletePerson
} = require('../controllers.js/people')

// router.get('/', getPerson)
// router.post('/', postPerson)
// router.post('/postman', postPersonPostman)
// router.put('/:id', updatePerson)
// router.delete('/:id', deletePerson)

router.route('/').get(getPerson).post(postPerson)
router.route('/postman').post(postPersonPostman)
router.route('/:id').put(updatePerson).delete(deletePerson)

module.exports = router