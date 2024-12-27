let cart = [];

function addToCart(productName, price) {
    cart.push({ productName, price });
    updateCartCount();
}

function updateCartCount() {
    document.getElementById('cart-count').innerText = `Cart (${cart.length})`;
}

function viewCart() {
    let cartItems = cart.map(item => `${item.productName} - $${item.price.toFixed(2)}`).join('\n');
    alert(`Your Cart:\n\n${cartItems}\n\nTotal: $${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}`);
}
