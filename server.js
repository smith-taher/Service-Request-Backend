const express = require('express');
const app = express();
const user = require('./user');

app.get('/', (req, res) => {
res.send('Hey Builders!');
})

app.use(user);

app.listen(3000, () => {
console.log('Running on port 3000');
})