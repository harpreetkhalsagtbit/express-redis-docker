// server.js
const express = require('express');
const app = express();
// redis-client.js
const redis = require('redis');
const client = redis.createClient(process.env.REDIS_URL);

console.log(`Node version ${process.version} is running`)
client.on('connect', function() {
    console.log('redis connected');
});

client.set('user', 'harpreet');
client.expire('user', 5);

client.get('user', function(err, reply) {
    console.log('before timeout', reply, 'exists')
});

setTimeout(() => {
    client.get('user', function(err, reply) {
        console.log('after timeout', reply, 'does not exist anymore')
    });
}, 10000)

app.get('/', (req, res) => {
    return res.send('Hello world');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});