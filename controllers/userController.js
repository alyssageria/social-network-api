const { Thought, User } = require('../models');

module.exports = {
    // GET - all users
    getUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },

    // GET - one user
    getOneUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .populate('thoughts')
            .populate('friends')
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },

    // POST - create new user
    createUsers(req, res) {
        User.create(req.body)
            .then((users) => res.json(users))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },

    // POST -  add friend
    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.params.friendId } },
            { new: true }
        ).then((users) => res.json(users))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },

    // PUT - remove friend
    removeFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
            { new: true }
        ).then((users) => res.json(users))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },

    // PUT - update a user
    updateUsers(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((users) =>
                !users
                    ? res.status(404).json({ message: 'No users with this id!' })
                    : res.json(users)
            )
            .catch((err) => res.status(500).json(err));
    }
}