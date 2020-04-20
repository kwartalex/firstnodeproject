const http = require("http");

const requestListener = function (req, res) {
  const { url } = req;

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(JSON.stringify(`Hello, ${url.substring(1)}`));
};

const server = http.createServer(requestListener);
server.listen(8090);
