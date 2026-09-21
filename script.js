// Step 1: Load cart data from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Step 2: Filter out invalid or empty items
const validItems = cart.filter(item => item.name);

// Step 2.1: Assign price if missing
validItems.forEach(item => {
  const productPrices = {
    "Fenugreek powder": 250,
    "Rose water": 150,
    "Rose & Bhringraj Hair Oil": 500,
    "Rose & Bhringraj Shampoo": 500,
    "Organic Lip Balm": 120,
    "Aloe Vera Gel": 300,
    "Face Cream": 400
  };
  item.price = productPrices[item.name] || 0;
});

// Step 3: Display order summary on checkout page
const summaryList = document.querySelector(".summary-list");
const totalElement = document.querySelector("#order-total");

let total = 0;
summaryList.innerHTML = "";
validItems.forEach(item => {
  const li = document.createElement("li");
  li.textContent = `${item.name} - ₹${item.price}`;
  summaryList.appendChild(li);
  total += item.price * (item.quantity || 1);
});
totalElement.textContent = `Total: ₹${total}`;

// 🟢 Step 4: Show total items and total price
const totalItems = validItems.reduce((sum, item) => sum + (item.quantity || 1), 0);
const totalPrice = validItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);


if (totalItemsElement) totalItemsElement.textContent = `Total Items: ${totalItems}`;
if (document.querySelector(".total-price")) (document.querySelector(".total-price")).textContent = `Total Price: ₹${totalPrice}`;


// 🟢 Step 5: Handle form submission
const checkoutForm = document.getElementById("checkoutForm");
if (checkoutForm) {
  checkoutForm.addEventListener("submit", function (e) {
    e.preventDefault();
    window.location.href = "confirmation.html";
  });
}
