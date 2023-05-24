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

const thoughts = [
    "The greatest journeys often begin with a single step.",
    "In the midst of chaos, find your inner peace.",
    "Every mistake is an opportunity to learn and grow.",
    "The beauty of nature is a reminder of life's wonders.",
    "Chase your dreams, for they hold the key to your happiness.",
    "Kindness is a language that everyone understands.",
    "Embrace change and let it guide you to new horizons.",
    "Life is a canvas, and you are the artist.",
    "Gratitude turns what we have into enough.",
    "Success is not final, failure is not fatal: It's the courage to continue that counts.",
    "In the face of adversity, resilience shines the brightest.",
    "The power of a smile can brighten someone's day.",
    "Time spent with loved ones is the truest treasure.",
    "Follow your passion and it will lead you to purpose.",
    "A positive attitude can overcome any obstacle.",
    "Let go of what no longer serves you and make room for new beginnings.",
    "Small acts of kindness can create ripples of positivity.",
    "The sun always rises after the darkest night.",
    "Embrace the unknown, for it holds infinite possibilities.",
    "Your worth is not defined by others' opinions, but by your own self-belief."
];

const randomUser = () => {
    const randomIndex = Math.floor(Math.random() * users.length);
    return users[randomIndex];
}

const randomThought = () => {
    const randomIndex = Math.floor(Math.random() * thoughts.length);
    return thoughts[randomIndex];
}

console.log(randomUser(users));
console.log(randomThought(thoughts));

module.exports = { randomUser, randomThought };