const http = require("http");
const filesystem = require("fs");

const requestListener = function (req, res) {
  const { url } = req;

  if (url == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    let index = filesystem.readFileSync("index.html");
    res.end(index);
  } else if (url === "/jobs") {
    res.writeHead(200, { "Content-Type": "text/html" });
    let jobs = filesystem.readFileSync("jobs.html");
    res.end(jobs);
  } else if (url === "/hobbies") {
    res.writeHead(200, { "Content-Type": "text/html" });
    let hobbies = filesystem.readFileSync("hobbies.html");
    res.end(hobbies);
  } else if (url.match("styles.css")) {
    res.writeHead(200, { "Content-Type": "text/css" });
    let styles = filesystem.readFileSync("styles.css");
    res.end(styles);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page does not exist");
  }
};

const server = http.createServer(requestListener);
server.listen(8100);
