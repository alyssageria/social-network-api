const router = require('express').Router();

const {
    getUsers,
    createUsers,
    getOneUser,
    addFriend,
    removeFriend
    // updateUsers
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUsers);

router.route('/:userId').get(getOneUser);
router.route('/:userId/friends/:friendId').post(addFriend).put(removeFriend);
// router
//     .put(updateUsers)

module.exports = router;