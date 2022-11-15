/*
1. Event loop: which allow js can run non-blocking operation
for more information, visit
    nodejs dev
    search on youtube
*/
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    for (let i = 0; i < 10000; i++) console.log(i);
    res.end("HomePage");
  }
  if (req.url === "/about") {
    for (let i = 0; i < 100000; i++) console.log(i);
    res.end("About");
  }
});

server.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});
