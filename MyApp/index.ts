// Typescript with tsc compiler 
import http from 'http';

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('testing server');
});

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`)
})
const message: string = "Typescript is working on localhost"

console.log(message)