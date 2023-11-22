// Function to calculate the pizza order
function calculateOrder() {
    var name = document.getElementById('customerName').value;
    var sizePrice = parseFloat(document.querySelector('input[name="size"]:checked').value);
    var deliveryPrice = parseFloat(document.getElementById('deliveryMethod').value);
    
    var toppingElements = document.querySelectorAll('input[name="topping"]:checked');
    var toppings = [];
    var toppingsPrice = 0;
    toppingElements.forEach(topping => {
        toppings.push(topping.value);
        toppingsPrice += 1.5;
    });

    var totalPrice = sizePrice + toppingsPrice + deliveryPrice;

    var orderDetails = `
        <h2>Order Details:</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Pizza Size:</strong> $${sizePrice}</p>
        <p><strong>Toppings:</strong> ${toppings.join(', ')} ($${toppingsPrice.toFixed(2)})</p>
        <p><strong>Delivery Method:</strong> $${deliveryPrice.toFixed(2)}</p>
        <p><strong>Total Price:</strong> $${totalPrice.toFixed(2)}</p>
    `;

    // Display the order details
    document.getElementById('orderDetails').innerHTML = orderDetails;

    // Show a customized confirmation message
    showConfirmationMessage();
}

// Function to show a customized confirmation message
function showConfirmationMessage() {
    var confirmationMessage = document.createElement('div');
    confirmationMessage.innerHTML = `
        <div class="confirmation-overlay">
            <div class="confirmation-box">
                <h2>Order Confirmed!</h2>
                <p>Thanks For Your Order! Your delicious pizza will be ready in 20 minutes.</p>
                
            </div>
        </div>
    `;
    
    document.body.appendChild(confirmationMessage);
}
