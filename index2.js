const fs = require("fs"); //importing filesystem object that contains all the functions that will be required
const http = require("http"); //importing http to perform server side operations
const url = require("url");
// const replaceTemplates = require("./modules/replaceTemplates");
// const slugify = require("slugify");

const data = fs.readFileSync("./data.json", "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);
  console.log(query.id);
  console.log(pathname);
});

server.listen(8003, "127.0.0.1", () => {
  console.log("The server has started to run!");
});
