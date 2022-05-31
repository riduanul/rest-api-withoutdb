const {v4: uuidv4} = require('uuid');

const users =[
    {
        id: uuidv4(),
        username: "riduanul haque",
        email: 'riduanul.haque1@gmail.com',
    },
    {
        id: uuidv4(),
        username: "Munna",
        email: 'riduanulhaque.dev@gmail.com',
    },
]

module.exports = users;