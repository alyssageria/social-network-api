const router = require('express').Router();

const {
    getUsers,
    createUsers,
    getOneUser,
    addFriend,
    removeFriend,
    updateUsers,
    deleteUsers
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUsers);

router.route('/:userId').get(getOneUser).put(updateUsers).delete(deleteUsers);
router.route('/:userId/friends/:friendId').post(addFriend).put(removeFriend);

module.exports = router;