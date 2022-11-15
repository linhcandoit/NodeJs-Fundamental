// why console.log(first,second) run after first, second declare?

const fs = require("fs");
const util = require("util");

const readFilePromise = util.promisify(fs.readFile);

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(path, "utf-8", (error, data) => {
//       if (error) reject(error);
//       else {
//         console.log("finish promis");
//         resolve(data);
//       }
//     });
//   });
// };

const start = async () => {
  const first = await readFilePromise("content/first.txt", "utf-8");
  const second = await readFilePromise("content/second.txt", "utf-8");
  console.log("Does it start?");
  console.log(first, second);
  //   console.log(first, second);
};
start();
// getText("content/first.txt").then((data) => {
//   console.log(data);
// });
