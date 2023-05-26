const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { randomUser, randomThought } = require('./data');

console.time('seeding');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    await User.deleteMany({});

    const users = [];

    for (let i = 0; i < 10; i++) {
        const user = randomUser();
        // const selectedThought = randomThought();
        const newUser = {
            username: user,
            email: user + '@gmail.com',
        }
        users.push(newUser);
        console.log(users)
    }



    await User.collection.insertMany(users);

    console.table(users);
    console.info('seeding complete 🌱');
    process.exit(0);
})