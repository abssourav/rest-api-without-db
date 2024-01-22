const { v4: uuidv4 } = require('uuid');

let users = [
    {
        id: uuidv4(),
        username: 'Abs Sourav',
        email: 'kanababa897@.com'
    },
    {
        id: uuidv4(),
        username: 'Arman Hossain',
        email: 'Kellababa897@.com'
    },
];

module.exports = users ;