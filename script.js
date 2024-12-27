let cart = [];

function addToCart(productName, price) {
    cart.push({ productName, price });
    updateCartCount();
}

function updateCartCount() {
    document.getElementById('cart-count').innerText = `Cart (${cart.length})`;
}

function viewCart() {
    let cartItems = cart.map(item => `${item.productName} - ₹${item.price.toFixed(2)}`).join('\n');
    alert(`Your Cart:\n\n${cartItems}\n\nTotal: ₹${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}`);
}

function buyNow(productName, price) {
    cart = [{ productName, price }];
    updateCartCount();
    viewCart();
}

function showPhones() {
    document.getElementById('products').classList.add('d-none');
    document.getElementById('accessories').classList.add('d-none');
    document.getElementById('phones').classList.remove('d-none');
}

function showLaptops() {
    document.getElementById('phones').classList.add('d-none');
    document.getElementById('accessories').classList.add('d-none');
    document.getElementById('products').classList.remove('d-none');
}

function showAccessories() {
    document.getElementById('products').classList.add('d-none');
    document.getElementById('phones').classList.add('d-none');
    document.getElementById('accessories').classList.remove('d-none');
}
