const users = [
    'Ava',
    'Ethan',
    'Isabella',
    'Benjamin',
    'Mia',
    'Alexander',
    'Charlotte',
    'Noah',
    'Amelia',
    'William',
    'Sophia',
    'James',
    'Harper',
    'Oliver',
    'Olivia',
    'Elijah',
    'Emily',
    'Lucas',
    'Abigail',
    'Henry'
];

const randomUser = () => {
    const randomIndex = Math.floor(Math.random() * users.length);
    return users[randomIndex];
}

console.log(randomUser(users));

module.exports = { randomUser };