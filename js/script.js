// Select all necessary elements
var plusButtons = document.querySelectorAll('.fa-plus-circle');
var minusButtons = document.querySelectorAll('.fa-minus-circle');
var deleteButtons = document.querySelectorAll('.fa-trash-alt');
var likeButtons = document.querySelectorAll('.fa-heart');
var totalPriceElement = document.querySelector('.total');

// Function to calculate and update the total price
function updateTotal() {
var total = 0;
var productCards = document.querySelectorAll('.card-body');

productCards.forEach(card => {
    var priceText = card.querySelector('.unit-price').textContent;
    var price = parseFloat(priceText);
    var quantity = parseInt(card.querySelector('.quantity').textContent);

    total += price * quantity;
  });

totalPriceElement.textContent = `${total} $`;
}

// Increase quantity
plusButtons.forEach(button => {
  button.addEventListener('click', () => {
    var quantityElement = button.nextElementSibling;
    var quantity = parseInt(quantityElement.textContent);
    quantity++;
    quantityElement.textContent = quantity;

    updateTotal();
  });
});

// Decrease quantity
minusButtons.forEach(button => {
  button.addEventListener('click', () => {
    var quantityElement = button.previousElementSibling;
    var quantity = parseInt(quantityElement.textContent);

    if (quantity > 0) {
      quantity--;
      quantityElement.textContent = quantity;

      updateTotal();
    }
  });
});

// Delete item
deleteButtons.forEach(button => {
  button.addEventListener('click', () => {
    var cardBody = button.closest('.card-body');
    cardBody.remove();

    updateTotal();
  });
});

// Like (toggle heart color)
likeButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('liked');
  });
});