const { Thought, User } = require('../models');

module.exports = {
    // GET - all users
    getThoughts(req, res) {
        Thought.find()
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err));
    },

    // get one user
    getOneThought(req, res) {
        Thought.findOne({ _id: req.parms.thoughtId })
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err));
    },

    // POST - create new user
    async createThought(req, res) {
        try {
            const thoughtData = await Thought.create(req.body)
            const userData = await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $push: { thoughts: thoughtData._id } },
                { new: true, runValidators: true })

            if (!userData) {
                return res.status(500).json({ message: 'No user found' })
            }
            res.json({ message: 'thought successfully added' })

        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    // PUT - update a user
    // updateUsers(req, res) {
    //     User.findOneAndUpdate(
    //         { _id: req.params.courseId },
    //         { $set: req.body },
    //         { runValidators: true, new: true }
    //     )
    //         .then((users) =>
    //             !users
    //                 ? res.status(404).json({ message: 'No users with this id!' })
    //                 : res.json(users)
    //         )
    //         .catch((err) => res.status(500).json(err));
    // }
}