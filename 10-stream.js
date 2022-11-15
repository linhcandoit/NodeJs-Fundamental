// Know the basic about the Stream
/*
    In the documentation, there is a lot of things, but, there are some main things
    that i need to concentrate on it!
    There are 4 types of stream: Readable Stream, Writable Stream, Duplex Stream and 
    Transform Stream
*/
// const fs = require("fs");

// const stream = fs.createReadStream("./content/big.txt", "utf-8");

// stream.on("data", (chunk) => {
//   console.log(chunk);
// });

const http = require("http");
const fs = require("fs");
const { strictEqual } = require("assert");

const server = http.createServer((req, res) => {
  const stream = fs.createReadStream("./content/big.txt", "utf-8");
  stream.on("open", () => {
    stream.pipe(res);
  });
  stream.on("error", (err) => console.log(err));
});

server.listen(5000);
