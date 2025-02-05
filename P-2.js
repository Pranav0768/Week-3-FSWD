const http = require('http');
const fs = require('fs');
const path = require('path');
const routes = require('./P-2 routes');

const PORT = process.env.PORT || 3300;

const server = http.createServer((req, res) => {
    routes(req, res);
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});