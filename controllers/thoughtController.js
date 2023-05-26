const { Thought, User } = require('../models');

module.exports = {
    // GET - all thoughts
    getThoughts(req, res) {
        Thought.find()
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err));
    },

    // GET - one thought
    getOneThought(req, res) {
        Thought.findOne({ _id: req.parms.thoughtId })
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err));
    },

    // POST - create new thought
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

    // PUT - update a thought
    async updateThought(req, res) {
        try {
            const updatedThought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId, userId: req.body.userId }, // Add userId condition to ensure the thought belongs to the correct user
                { $set: req.body },
                { new: true, runValidators: true }
            );

            if (!updatedThought) {
                return res.status(404).json({ message: 'No thought found with this id for the specified user' });
            }

            res.json(updatedThought);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    }
}