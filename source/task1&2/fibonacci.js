const http = require('http');

const requestListener = function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(JSON.stringify(fib()));
};

const server = http.createServer(requestListener);
server.listen(8080);

function fib() {
    let arr = [0, 1];
    for(let i = 2; i < 1000 + 1; i++) {
        arr.push(arr[i -2] + arr[1 -1])
    }
    return arr
}
