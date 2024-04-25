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

document.getElementById("btn-gc").addEventListener("click", function () {
  fetch("cc-col.json")
    .then((response) => response.json())
    .then((data) => {
      // Filter items with id values 1, 2, 3, and 4
      const filteredItems = data.filter((item) =>
        [1, 2, 3, 4].includes(item.id)
      );

      if (filteredItems.length > 0) {
        // Extract prices of filtered items
        const prices = filteredItems.map((item) => item.price);

        // Store the extracted prices in localStorage
        localStorage.setItem("prices", JSON.stringify(prices));

        // Redirect to page2.html
        window.location.href = "/college-wise-clothes/cc-col/cc.html";
      } else {
        console.error("No items found with ids 1, 2, 3, and 4.");
      }
    })
    .catch((error) => console.error("Error fetching data:", error));
});
