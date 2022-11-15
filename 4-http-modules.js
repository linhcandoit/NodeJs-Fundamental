const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("This is HomePage");
  }
  if (req.url === "/about") {
    res.end("This is AboutPage");
  }
});

server.listen(5000);
