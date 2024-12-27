let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName, price, imageUrl) {
    let item = cart.find(item => item.productName === productName);
    if (item) {
        item.quantity += 1;
    } else {
        cart.push({ productName, price, imageUrl, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    document.getElementById('cart-count').innerText = `Cart (${cart.length})`;
}

function viewCart() {
    window.location.href = '../cart/cart.html';
}

function buyNow(productName, price, imageUrl) {
    cart = [{ productName, price, imageUrl, quantity: 1 }];
    localStorage.setItem('cart', JSON.stringify(cart));
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

function removeFromCart(productName) {
    let item = cart.find(item => item.productName === productName);
    if (item) {
        if (item.quantity > 1) {
            item.quantity -= 1;
        } else {
            cart = cart.filter(item => item.productName !== productName);
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    loadCart();
}

function calculateTotal() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

document.addEventListener('DOMContentLoaded', updateCartCount);
