"use strict";
// function clearLocalStorage() {
//   localStorage.removeItem("collegeName");
//   localStorage.removeItem("cid");
//   localStorage.removeItem("price");
// }
// function fetchDataAndUpdatePage(jsonFileName) {
//   fetch(jsonFileName)
//     .then((response) => response.json())
//     .then((data) => {
//       // Extract the college name, cid, and price
//       const collegeName = data[0]["col-name"];
//       const cid = data[0]["cid"];
//       const price = data[0]["price"];

//       // Store the extracted data in localStorage
//       localStorage.setItem("collegeName", collegeName);
//       localStorage.setItem("cid", cid);
//       localStorage.setItem("price", price);

//       // Redirect to cc.html
//       window.location.href = "/college-wise-clothes/cc-col/cc.html";
//     })
//     .catch((error) => console.error("Error fetching data:", error));
// }

// document.getElementById("btn-pvm").addEventListener("click", function () {
//   clearLocalStorage();
//   fetchDataAndUpdatePage("pvm-col.json");
// });

// document.getElementById("btn-dbs").addEventListener("click", function () {
//   clearLocalStorage();
//   fetchDataAndUpdatePage("dbs-col.json");
// });

// document.getElementById("btn-gc").addEventListener("click", function () {
//   clearLocalStorage();
//   fetchDataAndUpdatePage("gc-col.json");
// });

// document.getElementById("btn-vkv").addEventListener("click", function () {
//   clearLocalStorage();
//   fetchDataAndUpdatePage("vkv-col.json");
// });

// document.getElementById("btn-rgjc").addEventListener("click", function () {
//   clearLocalStorage();
//   fetchDataAndUpdatePage("rgjc-col.json");
// });

// document.getElementById("btn-nc").addEventListener("click", function () {
//   clearLocalStorage();
//   fetchDataAndUpdatePage("nc-col.json");
// });

// document.getElementById("btn-cc").addEventListener("click", function () {
//   clearLocalStorage();
//   fetchDataAndUpdatePage("cc-col.json");
// });

// document.getElementById("btn--pvm").addEventListener("click", function () {
//   clearLocalStorage();
//   fetchDataAndUpdatePage("pvm-col.json");
// });

// document.getElementById("btn--dbs").addEventListener("click", function () {
//   clearLocalStorage();
//   fetchDataAndUpdatePage("dbs-col.json");
// });

// document.getElementById("btn--gc").addEventListener("click", function () {
//   clearLocalStorage();
//   fetchDataAndUpdatePage("gc-col.json");
// });

// document.getElementById("btn--vkv").addEventListener("click", function () {
//   clearLocalStorage();
//   fetchDataAndUpdatePage("vkv-col.json");
// });

// document.getElementById("btn--rgjc").addEventListener("click", function () {
//   clearLocalStorage();
//   fetchDataAndUpdatePage("rgjc-col.json");
// });

// document.getElementById("btn--nc").addEventListener("click", function () {
//   clearLocalStorage();
//   fetchDataAndUpdatePage("nc-col.json");
// });

// document.getElementById("btn--cc").addEventListener("click", function () {
//   clearLocalStorage();
//   fetchDataAndUpdatePage("cc-col.json");
// });

// function clearLocalStorage() {
//   localStorage.removeItem("collegeName");
//   localStorage.removeItem("cid");
//   localStorage.removeItem("price");
// }

// function fetchDataAndUpdatePage(jsonFileName) {
//   fetch(jsonFileName)
//     .then((response) => response.json())
//     .then((data) => {
//       // Extract the college name, cid, and price
//       const collegeName = data[0]["col-name"];
//       const cid = data[0]["cid"];
//       const price = data[0]["price"];

//       // Store the extracted data in localStorage
//       localStorage.setItem("collegeName", collegeName);
//       localStorage.setItem("cid", cid);
//       localStorage.setItem("price", price);

//       // Redirect to cc.html
//       window.location.href = "/college-wise-clothes/cc-col/cc.html";
//     })
//     .catch((error) => console.error("Error fetching data:", error));
// }

// function addEventListenerAndFetchData(buttonId, jsonFileName) {
//   document.getElementById(buttonId).addEventListener("click", function () {
//     clearLocalStorage();
//     fetchDataAndUpdatePage(jsonFileName);
//   });
// }

// // Define button IDs and corresponding JSON file names
// const buttonJsonMap = {
//   "btn-pvm": "pvm-col.json",
//   "btn-dbs": "dbs-col.json",
//   "btn-gc": "gc-col.json",
//   "btn-vkv": "vkv-col.json",
//   "btn-rgjc": "rgjc-col.json",
//   "btn-nc": "nc-col.json",
//   "btn-cc": "cc-col.json",
//   "btn--pvm": "pvm-col.json",
//   "btn--dbs": "dbs-col.json",
//   "btn--gc": "gc-col.json",
//   "btn--vkv": "vkv-col.json",
//   "btn--rgjc": "rgjc-col.json",
//   "btn--nc": "nc-col.json",
//   "btn--cc": "cc-col.json",
// };

// // Add event listeners for all buttons
// for (const buttonId in buttonJsonMap) {
//   addEventListenerAndFetchData(buttonId, buttonJsonMap[buttonId]);
// }

function clearLocalStorage() {
  localStorage.removeItem("collegeName");
  localStorage.removeItem("cid");
  localStorage.removeItem("price");
}

function fetchDataAndUpdatePage(jsonFileName) {
  console.log("Fetching data from:", jsonFileName); // Add this line for debugging
  fetch(jsonFileName)
    .then((response) => response.json())
    .then((data) => {
      console.log("Fetched data:", data); // Add this line for debugging
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

function addEventListenerAndFetchData(buttonId, jsonFileName) {
  document.getElementById(buttonId).addEventListener("click", function () {
    clearLocalStorage();
    fetchDataAndUpdatePage(jsonFileName);
  });
}

// Define button IDs and corresponding JSON file names
const buttonJsonMap = {
  "btn-pvm": "pvm-col.json",
  "btn-dbs": "dbs-col.json",
  "btn-gc": "gc-col.json",
  "btn-vkv": "vkv-col.json",
  "btn-rgjc": "rgjc-col.json",
  "btn-nc": "nc-col.json",
  "btn-cc": "cc-col.json",
  "btn--pvm": "pvm-col.json",
  "btn--dbs": "dbs-col.json",
  "btn--gc": "gc-col.json",
  "btn--vkv": "vkv-col.json",
  "btn--rgjc": "rgjc-col.json",
  "btn--nc": "nc-col.json",
  "btn--cc": "cc-col.json",
};

// Add event listeners for all buttons
for (const buttonId in buttonJsonMap) {
  addEventListenerAndFetchData(buttonId, buttonJsonMap[buttonId]);
}
