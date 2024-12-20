const price = 50;
const priceElement = document.getElementById("price");
const quantityElement = document.getElementById("quantity");
const totalElement = document.getElementById("total");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");

let quantity = 0;

function updateTotal() {
    const total = price * quantity;
    totalElement.innerHTML = total;
}

function increaseQuantity() {
    quantity++;
    quantityElement.innerHTML = quantity;
    updateTotal();
}

function decreaseQuantity() {
    if (quantity > 0) {
        quantity--;
        quantityElement.innerHTML = quantity;
        updateTotal();
    }
}

increaseButton.addEventListener("click", increaseQuantity);
decreaseButton.addEventListener("click", decreaseQuantity);

updateTotal();
