// AL~RHAMA E-Commerce Website - Complete JavaScript

// Sample Products Data
const products = [
    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        price: 49.99,
        description: "Premium noise-cancelling wireless headphones with 30-hour battery life",
        category: "electronics",
        image: "https://via.placeholder.com/200x200?text=Headphones"
     },
     {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        price: 49.99,
        description: "Premium noise-cancelling wireless headphones with 30-hour battery life",
        category: "electronics",
        image: "https://via.placeholder.com/200x200?text=Headphones"
    },
    {
        id: 2,
        name: "Smartphone Power Bank 10000mAh",
        price: 29.99,
        description: "Fast-charging portable power bank with dual USB ports",
        category: "electronics",
        image: "https://via.placeholder.com/200x200?text=Power+Bank"
    },
    {
        id: 3,
        name: "Men's Casual T-Shirt",
        price: 19.99,
        description: "Comfortable cotton t-shirt, available in multiple colors",
        category: "clothing",
        image: "https://via.placeholder.com/200x200?text=T-Shirt"
    },
    {
        id: 4,
        name: "Women's Stylish Handbag",
        price: 39.99,
        description: "Elegant leather handbag with multiple compartments",
        category: "clothing",
        image: "https://via.placeholder.com/200x200?text=Handbag"
    },
    {
        id: 5,
        name: "Stainless Steel Water Bottle",
        price: 15.99,
        description: "Insulated water bottle, keeps drinks cold for 24 hours",
        category: "home",
        image: "https://via.placeholder.com/200x200?text=Water+Bottle"
    },
    {
        id: 6,
        name: "Kitchen Knife Set",
        price: 59.99,
        description: "Professional 5-piece stainless steel knife set",
        category: "home",
        image: "https://via.placeholder.com/200x200?text=Knife+Set"
    },
    {
        id: 7,
        name: "Face Moisturizer Cream",
        price: 24.99,
        description: "Hydrating face cream for all skin types",
        category: "beauty",
        image: "https://via.placeholder.com/200x200?text=Moisturizer"
    },
    {
        id: 8,
        name: "Organic Honey 500g",
        price: 12.99,
        description: "Pure organic honey, sourced from local beekeepers",
        category: "food",
        image: "https://via.placeholder.com/200x200?text=Honey"
    },
    {
        id: 9,
        name: "Yoga Mat",
        price: 22.99,
        description: "Non-slip exercise yoga mat with carrying strap",
        category: "sports",
        image: "https://via.placeholder.com/200x200?text=Yoga+Mat"
    },
    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        price: 49.99,
        description: "Premium noise-cancelling wireless headphones with 30-hour battery life",
        category: "electronics",
        image: "https://via.placeholder.com/200x200?text=Headphones"
    },
    {
        id: 2,
        name: "Smartphone Power Bank 10000mAh",
        price: 29.99,
        description: "Fast-charging portable power bank with dual USB ports",
        category: "electronics",
        image: "https://via.placeholder.com/200x200?text=Power+Bank"
    },
    {
        id: 3,
        name: "Men's Casual T-Shirt",
        price: 19.99,
        description: "Comfortable cotton t-shirt, available in multiple colors",
        category: "clothing",
        image: "https://via.placeholder.com/200x200?text=T-Shirt"
    },
    {
        id: 4,
        name: "Women's Stylish Handbag",
        price: 39.99,
        description: "Elegant leather handbag with multiple compartments",
        category: "clothing",
        image: "https://via.placeholder.com/200x200?text=Handbag"
    },
    {
        id: 5,
        name: "Stainless Steel Water Bottle",
        price: 15.99,
        description: "Insulated water bottle, keeps drinks cold for 24 hours",
        category: "home",
        image: "https://via.placeholder.com/200x200?text=Water+Bottle"
    },
    {
        id: 6,
        name: "Kitchen Knife Set",
        price: 59.99,
        description: "Professional 5-piece stainless steel knife set",
        category: "home",
        image: "https://via.placeholder.com/200x200?text=Knife+Set"
    },
    {
        id: 7,
        name: "Face Moisturizer Cream",
        price: 24.99,
        description: "Hydrating face cream for all skin types",
        category: "beauty",
        image: "https://via.placeholder.com/200x200?text=Moisturizer"
    },
    {
        id: 8,
        name: "Organic Honey 500g",
        price: 12.99,
        description: "Pure organic honey, sourced from local beekeepers",
        category: "food",
        image: "https://via.placeholder.com/200x200?text=Honey"
    },
    {
        id: 9,
        name: "Yoga Mat",
        price: 22.99,
        description: "Non-slip exercise yoga mat with carrying strap",
        category: "sports",
        image: "https://via.placeholder.com/200x200?text=Yoga+Mat"
    },
    {
        id: 2,
        name: "Smartphone Power Bank 10000mAh",
        price: 29.99,
        description: "Fast-charging portable power bank with dual USB ports",
        category: "electronics",
        image: "https://via.placeholder.com/200x200?text=Power+Bank"
    },
    {
        id: 3,
        name: "Men's Casual T-Shirt",
        price: 19.99,
        description: "Comfortable cotton t-shirt, available in multiple colors",
        category: "clothing",
        image: "https://via.placeholder.com/200x200?text=T-Shirt"
    },
    {
        id: 4,
        name: "Women's Stylish Handbag",
        price: 39.99,
        description: "Elegant leather handbag with multiple compartments",
        category: "clothing",
        image: "https://via.placeholder.com/200x200?text=Handbag"
    },
    {
        id: 5,
        name: "Stainless Steel Water Bottle",
        price: 15.99,
        description: "Insulated water bottle, keeps drinks cold for 24 hours",
        category: "home",
        image: "https://via.placeholder.com/200x200?text=Water+Bottle"
    },
    {
        id: 6,
        name: "Kitchen Knife Set",
        price: 59.99,
        description: "Professional 5-piece stainless steel knife set",
        category: "home",
        image: "https://via.placeholder.com/200x200?text=Knife+Set"
    },
    {
        id: 7,
        name: "Face Moisturizer Cream",
        price: 24.99,
        description: "Hydrating face cream for all skin types",
        category: "beauty",
        image: "https://via.placeholder.com/200x200?text=Moisturizer"
    },
    {
        id: 8,
        name: "Organic Honey 500g",
        price: 12.99,
        description: "Pure organic honey, sourced from local beekeepers",
        category: "food",
        image: "https://via.placeholder.com/200x200?text=Honey"
    },
    {
        id: 9,
        name: "Yoga Mat",
        price: 22.99,
        description: "Non-slip exercise yoga mat with carrying strap",
        category: "sports",
        image: "https://via.placeholder.com/200x200?text=Yoga+Mat"
    },
    {
        id: 10,
        name: "Wireless Mouse",
        price: 18.99,
        description: "Ergonomic wireless mouse with long battery life",
        category: "electronics",
        image: "https://via.placeholder.com/200x200?text=Mouse"
    },
    {
        id: 11,
        name: "Men's Running Shoes",
        price: 69.99,
        description: "Lightweight running shoes with cushioned sole",
        category: "clothing",
        image: "https://via.placeholder.com/200x200?text=Running+Shoes"
    },
    {
        id: 12,
        name: "Coffee Maker",
        price: 45.99,
        description: "Automatic drip coffee maker with programmable timer",
        category: "home",
        image: "https://via.placeholder.com/200x200?text=Coffee+Maker"
    }
];

// Shopping Cart
let cart = JSON.parse(localStorage.getItem('alrhama_cart')) || [];
let currentUser = JSON.parse(localStorage.getItem('alrhama_user')) || null;

// DOM Elements
const productGrid = document.getElementById('product-grid');
const cartCount = document.getElementById('cart-count');
const authButtons = document.getElementById('auth-buttons');
const userMenu = document.getElementById('user-menu');
const userName = document.getElementById('user-name');

// Initialize Website
document.addEventListener('DOMContentLoaded', function() {
    loadProducts(products);
    updateCartCount();
    updateAuthUI();
    
    // Form Submissions
    document.getElementById('loginForm')?.addEventListener('submit', handleLogin);
    document.getElementById('registerForm')?.addEventListener('submit', handleRegister);
    document.getElementById('contactForm')?.addEventListener('submit', handleContact);
});

// Load Products to Grid
function loadProducts(productsToLoad) {
    productGrid.innerHTML = '';
    
    if (productsToLoad.length === 0) {
        productGrid.innerHTML = '<p style="text-align: center; grid-column: 1/-1;">No products found in this category</p>';
        return;
    }
    
    productsToLoad.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

// Filter Products by Category
function filterProducts(category) {
    const filteredProducts = products.filter(product => product.category === category);
    loadProducts(filteredProducts);
    
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Show All Products
function showAllProducts() {
    loadProducts(products);
    
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector('.filter-btn:first-child').classList.add('active');
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    
    if (!product) return;
    
    // Check if product already in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            image: product.image
        });
    }
    
    // Save to localStorage
    localStorage.setItem('alrhama_cart', JSON.stringify(cart));
    
    // Update UI
    updateCartCount();
    showNotification(`${product.name} added to cart!`, 'success');
}

// Update Cart Count
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = count;
}

// Open Cart Modal
function openCart() {
    const cartModal = document.getElementById('cartModal');
    cartModal.style.display = 'block';
    
    // Load cart items
    loadCartItems();
}

// Close Cart Modal
function closeCart() {
    document.getElementById('cartModal').style.display = 'none';
}

// Load Cart Items
function loadCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const emptyCartMessage = document.getElementById('empty-cart-message');
    
    if (cart.length === 0) {
        emptyCartMessage.style.display = 'block';
        return;
    }
    
    emptyCartMessage.style.display = 'none';
    
    let cartHTML = '';
    let subtotal = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        
        cartHTML += `
            <div class="cart-item">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                </div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
    });
    
    cartItemsContainer.innerHTML = cartHTML;
    
    // Update totals
    const shipping = subtotal > 0 ? 5.00 : 0;
    const total = subtotal + shipping;
    
    document.getElementById('cart-subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('cart-shipping').textContent = `$${shipping.toFixed(2)}`;
    document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;
}

// Update Item Quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity += change;
        
        // Remove item if quantity is 0 or less
        if (item.quantity <= 0) {
            removeFromCart(productId);
            return;
        }
        
        localStorage.setItem('alrhama_cart', JSON.stringify(cart));
        loadCartItems();
        updateCartCount();
    }
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('alrhama_cart', JSON.stringify(cart));
    loadCartItems();
    updateCartCount();
    showNotification('Item removed from cart', 'info');
}

// Proceed to Checkout
function proceedToCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'error');
        return;
    }
    
    if (!currentUser) {
        showNotification('Please login to proceed with checkout', 'warning');
        openLoginModal();
        return;
    }
    
    // Redirect to checkout page (you can create this page)
    window.location.href = 'checkout.html';
}

// Login Modal Functions
function openLoginModal() {
    document.getElementById('loginModal').style.display = 'block';
}

function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}

// Register Modal Functions
function openRegisterModal() {
    closeLoginModal();
    document.getElementById('registerModal').style.display = 'block';
}

function closeRegisterModal() {
    document.getElementById('registerModal').style.display = 'none';
}

// Handle Login
function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Simple validation (in production, use server-side authentication)
    if (email && password) {
        // Mock user data (replace with actual authentication)
        currentUser = {
            name: email.split('@')[0],
            email: email
        };
        
        localStorage.setItem('alrhama_user', JSON.stringify(currentUser));
        updateAuthUI();
        closeLoginModal();
        showNotification('Login successful!', 'success');
    }
}

// Handle Register
function handleRegister(e) {
    e.preventDefault();
    
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const phone = document.getElementById('registerPhone').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    
    if (password !== confirmPassword) {
        showNotification('Passwords do not match!', 'error');
        return;
    }
    
    // Mock registration (replace with actual registration)
    currentUser = {
        name: name,
        email: email,
        phone: phone
    };
    
    localStorage.setItem('alrhama_user', JSON.stringify(currentUser));
    updateAuthUI();
    closeRegisterModal();
    showNotification('Registration successful! Welcome to AL~RHAMA', 'success');
}

// Google Login (Mock)
function googleLogin() {
    currentUser = {
        name: 'Google User',
        email: 'user@gmail.com'
    };
    
    localStorage.setItem('alrhama_user', JSON.stringify(currentUser));
    updateAuthUI();
    closeLoginModal();
    closeRegisterModal();
    showNotification('Login successful with Google!', 'success');
}

// Logout
function logout() {
    currentUser = null;
    localStorage.removeItem('alrhama_user');
    updateAuthUI();
    showNotification('You have been logged out', 'info');
}

// Update Authentication UI
function updateAuthUI() {
    if (currentUser) {
        authButtons.style.display = 'none';
        userMenu.style.display = 'block';
        userName.textContent = currentUser.name;
    } else {
        authButtons.style.display = 'block';
        userMenu.style.display = 'none';
    }
}

// Toggle User Dropdown
function toggleDropdown() {
    const dropdown = document.getElementById('user-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Handle Contact Form
function handleContact(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Mock contact submission (replace with actual form submission)
    console.log('Contact form submitted:', { name, email, message });
    
    showNotification('Thank you for your message! We will get back to you soon.', 'success');
    
    // Reset form
    document.getElementById('contactForm').reset();
}

// Show Notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : type === 'warning' ? 'fa-exclamation-triangle' : 'fa-info-circle'}"></i>
        ${message}
    `;
    
    // Add to body
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Scroll to Products
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// Close modals when clicking outside
window.onclick = function(event) {
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const cartModal = document.getElementById('cartModal');
    
    if (event.target === loginModal) {
        closeLoginModal();
    }
    
    if (event.target === registerModal) {
        closeRegisterModal();
    }
    
    if (event.target === cartModal) {
        closeCart();
    }
    
    // Close dropdown if clicking outside
    const dropdown = document.getElementById('user-dropdown');
    if (dropdown.style.display === 'block' && !event.target.closest('.dropdown')) {
        dropdown.style.display = 'none';
    }
}

// Add notification styles dynamically
const style = document.createElement('style');
style.textContent = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        color: white;
        font-weight: 600;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        z-index: 3000;
        animation: slideIn 0.3s, fadeOut 0.5s 2.5s;
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .notification-success { background-color: #4CAF50; }
    .notification-error { background-color: #f44336; }
    .notification-warning { background-color: #FF9800; }
    .notification-info { background-color: #2196F3; }
    
    @keyframes slideIn {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;

document.head.appendChild(style);

