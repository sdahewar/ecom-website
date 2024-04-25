"use strict";

// document.getElementById("btn-gc").addEventListener("click", function () {
//   fetch("/cc-col.json")
//     .then((response) => response.json())
//     .then((data) => {
//       // Find the item with id equal to 3
//       const item = data.find((item) => item.id === 3);

//       if (item) {
//         // Extract the price of the item
//         const price = item.price;

//         // Store the extracted price in localStorage
//         localStorage.setItem("price", price);

//         // Redirect to page2.html
//         window.location.href = "/college-wise-clothes/cc-col/cc.html";
//       } else {
//         console.error("Item with id 3 not found.");
//       }
//     })
//     .catch((error) => console.error("Error fetching data:", error));
// });

// document.getElementById("btn-gc").addEventListener("click", function () {
//   fetch("cc-col.json")
//     .then((response) => response.json())
//     .then((data) => {
//       // Filter items with id values 1, 2, 3, and 4
//       const filteredItems = data.filter((item) =>
//         [1, 2, 3, 4].includes(item.id)
//       );

//       if (filteredItems.length > 0) {
//         // Extract prices of filtered items
//         const prices = filteredItems.map((item) => item.price);

//         // Store the extracted prices in localStorage
//         localStorage.setItem("prices", JSON.stringify(prices));

//         // Redirect to page2.html
//         window.location.href = "/college-wise-clothes/cc-col/cc.html";
//       } else {
//         console.error("No items found with ids 1, 2, 3, and 4.");
//       }
//     })
//     .catch((error) => console.error("Error fetching data:", error));
// });

// document.getElementById("btn-gc").addEventListener("click", function () {
//   Promise.all([
//     fetch("gc-col.json").then((response) => response.json()),
//     fetch("college-details.json").then((response) => response.json()),
//   ])
//     .then(([data, collegeDetails]) => {
//       // Extract prices from data.json
//       const prices = data.map((item) => item.price);

//       // Extract college names from college-details.json
//       const collegeNames = collegeDetails.map((college) => college["col-name"]);

//       // Store the extracted prices and college names in localStorage
//       localStorage.setItem("prices", JSON.stringify(prices));
//       localStorage.setItem("collegeNames", JSON.stringify(collegeNames));

//       // Redirect to page2.html
//       window.location.href = "/college-wise-clothes/cc-col/cc.html";
//     })
//     .catch((error) => console.error("Error fetching data:", error));
// });

// document.getElementById("btn-cc").addEventListener("click", function () {
//   Promise.all([
//     fetch("cc-col.json").then((response) => response.json()),
//     fetch("college-details.json").then((response) => response.json()),
//   ])
//     .then(([data, collegeDetails]) => {
//       // Extract prices from data.json
//       const prices = data.map((item) => item.price);

//       // Extract college names from college-details.json
//       const collegeNames = collegeDetails.map((college) => college["col-name"]);

//       // Store the extracted prices and college names in localStorage
//       localStorage.setItem("prices", JSON.stringify(prices));
//       localStorage.setItem("collegeNames", JSON.stringify(collegeNames));

//       // Redirect to page2.html
//       window.location.href = "/college-wise-clothes/cc-col/cc.html";
//     })
//     .catch((error) => console.error("Error fetching data:", error));
// });

// document.getElementById("btn-rjgc").addEventListener("click", function () {
//   Promise.all([
//     fetch("rjgc-col.json").then((response) => response.json()),
//     fetch("college-details.json").then((response) => response.json()),
//   ])
//     .then(([data, collegeDetails]) => {
//       // Extract prices from data.json
//       const prices = data.map((item) => item.price);

//       // Extract college names from college-details.json
//       const collegeNames = collegeDetails.map((college) => college["col-name"]);

//       // Store the extracted prices and college names in localStorage
//       localStorage.setItem("prices", JSON.stringify(prices));
//       localStorage.setItem("collegeNames", JSON.stringify(collegeNames));

//       // Redirect to page2.html
//       window.location.href = "/college-wise-clothes/cc-col/cc.html";
//     })
//     .catch((error) => console.error("Error fetching data:", error));
// });

// document.getElementById("btn-nc").addEventListener("click", function () {
//   Promise.all([
//     fetch("nc-col.json").then((response) => response.json()),
//     fetch("college-details.json").then((response) => response.json()),
//   ])
//     .then(([data, collegeDetails]) => {
//       // Extract prices from data.json
//       const prices = data.map((item) => item.price);

//       // Extract college names from college-details.json
//       const collegeNames = collegeDetails.map((college) => college["col-name"]);

//       // Store the extracted prices and college names in localStorage
//       localStorage.setItem("prices", JSON.stringify(prices));
//       localStorage.setItem("collegeNames", JSON.stringify(collegeNames));

//       // Redirect to page2.html
//       window.location.href = "/college-wise-clothes/cc-col/cc.html";
//     })
//     .catch((error) => console.error("Error fetching data:", error));
// });

// document.getElementById("btn-pvm").addEventListener("click", function () {
//   Promise.all([
//     fetch("pvm-col.json").then((response) => response.json()),
//     fetch("college-details.json").then((response) => response.json()),
//   ])
//     .then(([data, collegeDetails]) => {
//       // Extract prices from data.json
//       const prices = data.map((item) => item.price);

//       // Extract college names from college-details.json
//       const collegeNames = collegeDetails.map((college) => college["col-name"]);

//       // Store the extracted prices and college names in localStorage
//       localStorage.setItem("prices", JSON.stringify(prices));
//       localStorage.setItem("collegeNames", JSON.stringify(collegeNames));

//       // Redirect to page2.html
//       window.location.href = "/college-wise-clothes/cc-col/cc.html";
//     })
//     .catch((error) => console.error("Error fetching data:", error));
// });

// Modify other buttons accordingly...

function fetchDataAndUpdatePage(jsonFileName) {
  fetch(jsonFileName)
    .then((response) => response.json())
    .then((data) => {
      // Extract the college name, cid, and price
      const collegeName = data[0]["col-name"];
      const cid = data[0]["cid"];
      const price = data[0]["price"];

      // Store the extracted data in localStorage
      localStorage.setItem("collegeName", collegeName);
      localStorage.setItem("cid", cid);
      localStorage.setItem("price", price);

      // Redirect to cc.html
      window.location.href = "/college-wise-clothes/cc-col/cc.html";
    })
    .catch((error) => console.error("Error fetching data:", error));
}

document.getElementById("btn-pvm").addEventListener("click", function () {
  fetchDataAndUpdatePage("pvm-col.json");
});

document.getElementById("btn-dbs").addEventListener("click", function () {
  fetchDataAndUpdatePage("dbs-col.json");
});

document.getElementById("btn-gc").addEventListener("click", function () {
  fetchDataAndUpdatePage("gc-col.json");
});

document.getElementById("btn-vkv").addEventListener("click", function () {
  fetchDataAndUpdatePage("vkv-col.json");
});

document.getElementById("btn-rgjc").addEventListener("click", function () {
  fetchDataAndUpdatePage("rgjc-col.json");
});

document.getElementById("btn-nc").addEventListener("click", function () {
  fetchDataAndUpdatePage("nc-col.json");
});

document.getElementById("btn-cc").addEventListener("click", function () {
  fetchDataAndUpdatePage("cc-col.json");
});

document.getElementById("btn--pvm").addEventListener("click", function () {
  fetchDataAndUpdatePage("pvm-col.json");
});

document.getElementById("btn--dbs").addEventListener("click", function () {
  fetchDataAndUpdatePage("dbs-col.json");
});

document.getElementById("btn--gc").addEventListener("click", function () {
  fetchDataAndUpdatePage("gc-col.json");
});

document.getElementById("btn--vkv").addEventListener("click", function () {
  fetchDataAndUpdatePage("vkv-col.json");
});

document.getElementById("btn--rgjc").addEventListener("click", function () {
  fetchDataAndUpdatePage("rgjc-col.json");
});

document.getElementById("btn--nc").addEventListener("click", function () {
  fetchDataAndUpdatePage("nc-col.json");
});

document.getElementById("btn--cc").addEventListener("click", function () {
  fetchDataAndUpdatePage("cc-col.json");
});

// Modify other buttons accordingly...
