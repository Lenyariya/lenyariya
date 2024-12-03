// Cart functionality
let cart = [];
const cartOverlay = document.getElementById('cart-overlay');
const cartIcon = document.querySelector('.cart-icon');
const cartCloseBtn = document.querySelector('.cart-close');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalSpan = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');

// Burger Menu Toggle_
const burgerMenu = document.querySelector('.burger-menu');
const navContainer = document.querySelector('.nav-container');

burgerMenu.addEventListener('click', () => {
    navContainer.classList.toggle('active');
    
    // Animate burger menu
    burgerMenu.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navContainer.contains(e.target) && !burgerMenu.contains(e.target)) {
        navContainer.classList.remove('active');
        burgerMenu.classList.remove('active');
    }
});

// Add Event Listeners to Order Buttons
document.querySelectorAll('.order-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const massageItem = e.target.closest('.massage-item');
        const name = massageItem.dataset.name;
        const price = parseFloat(massageItem.dataset.price);
        
        addToCart(name, price);
    });
});

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

function updateCart() {
    // Update cart count in header
    document.querySelector('.cart-count').textContent = cart.length;

    // Render cart items
    cartItemsContainer.innerHTML = cart.map((item, index) => 
        `<div class="cart-item" data-index="${index}">
            <span>${item.name}</span>
            <span>$${item.price.toFixed(2)}</span>
            <button class="remove-item-btn" onclick="removeFromCart(${index})">Remove</button>
        </div>`
    ).join('');

    // Calculate total
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotalSpan.textContent = `$${total.toFixed(2)}`;

    // Check for free aromatherapy massage
    if (cart.length === 5) {
        const freeItem = { 
            name: 'Free 30-min Aromatherapy Massage', 
            price: 0 
        };
        cart.push(freeItem);
        updateCart();
    }
}

// Remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Cart Overlay functionality_
cartIcon.addEventListener('click', () => {
    cartOverlay.style.display = 'flex';
});

cartCloseBtn.addEventListener('click', () => {
    cartOverlay.style.display = 'none';
});

// Checkout functionality
checkoutBtn.addEventListener('click', () => {
    if (cart.length > 0) {
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        alert(`Checkout successful!\nTotal payment: $${total.toFixed(2)}\nThank you for your order!`);
        cart = [];
        updateCart();
        cartOverlay.style.display = 'none';
    } else {
        alert('Your cart is empty. Please add some massages.');
    }
});

// Close cart overlay when clicking outside
cartOverlay.addEventListener('click', (e) => {
    if (e.target === cartOverlay) {
        cartOverlay.style.display = 'none';
    }
});