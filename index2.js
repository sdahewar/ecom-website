// const fs = require("fs"); //importing filesystem object that contains all the functions that will be required
// const http = require("http"); //importing http to perform server side operations
// const url = require("url");
// // const replaceTemplates = require("./modules/replaceTemplates");
// // const slugify = require("slugify");

// // const data = fs.readFileSync("./data.json", "utf-8");
// // const data2 = fs.readFileSync("./data2.json", "utf-8");
// // const dataObj = JSON.parse(data);
// // const dataObj2 = JSON.parse(data2);
// const ccdata = fs.readFileSync("./cc-col.json", "utf-8");
// const ccdataObj = JSON.parse(ccdata);

// // const tempGc = fs.readFileSync("./gc.html", "utf-8");
// const tempShop = fs.readFileSync("./shop.html", "utf-8");
// // const tempCard = fs.readFileSync("./tempCards.html", "utf-8");

// function replaceTheTemplates(template, product) {
//   let output = template.replace(/{%COLLEGE_NAME%}/g, product.school);
//   output = output.replace(/{%PRICE%}/g, product.price);

//   return output;
// }

// const server = http.createServer((req, res) => {
//   const { query, pathname } = url.parse(req.url, true);
//   console.log(query.id);
//   console.log(pathname);

//   //SHOP PAGE
//   //
//   //
//   //
//   //
//   if (pathname === "/shop") {
//     res.writeHead(200, {
//       "content-type": "text/html",
//     });

//     // const cardsHtml = dataObj2
//     //   .map((el) => {
//     //     let output = tempCard.replace(/{%COLLEGE_NAME%}/g, el.school);
//     //     output = output.replace(/{%ID%}/g, el.id);
//     //     return output;
//     //   })
//     //   .join("");

//     // let output2 = tempShop.replace(/{%PRODUCT_CARDS%}/g, cardsHtml);
//     // res.end(output2);
//   }

//   //PRODUCT PAGE I.E GC PAGE
//   else if (pathname === "/gc") {
//     res.writeHead(200, {
//       "content-type": "text / html",
//     });

//     // const product = dataObj[query.id];
//     // const output = replaceTheTemplates(tempProduct, product);
//     res.end(tempGc);
//   } else {
//     res.writeHead(404, {
//       "content-type": "text/html",
//     });
//     res.end("Page not found!");
//   }
// });

// server.listen(8010, "127.0.0.1", () => {
//   console.log("The server has started to run!");
// });

// we will write js here
