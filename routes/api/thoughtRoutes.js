const router = require('express').Router();

const { getOneThought,
    getThoughts,
    createThought, } = require('../../controllers/thoughtController');


router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId').get(getOneThought)

// router
//     .put(updateUsers)

module.exports = router;