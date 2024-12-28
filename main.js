document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: "MacBook Air", price: 1199 },
        { id: 2, name: "MacBook Pro", price: 2399 },
        { id: 3, name: "MacBook Pro 13", price: 1799 },
        { id: 4, name: "MacBook Pro 15", price: 2299 },
        { id: 5, name: "MacBook Air Blue", price: 1199 },
        { id: 6, name: "MacBook Pro 16", price: 2499 },
        { id: 7, name: "iPad Pro 12.9", price: 1099 },
        { id: 8, name: "iPad Air", price: 599 },
        { id: 9, name: "iPad Mini", price: 499 },
        { id: 10, name: "iPad Pro 11", price: 799 },
        { id: 11, name: "iPad Mini 2021", price: 499 },
        { id: 12, name: "iPad 2020", price: 329 },
        { id: 13, name: "iPhone 14", price: 799 },
        { id: 14, name: "iPhone 13", price: 799 },
        { id: 15, name: "iPhone 13 Mini", price: 799 },
        { id: 16, name: "iPhone 12", price: 699 },
        { id: 17, name: "iPhone 12 Mini", price: 699 },
        { id: 18, name: "iPhone 11", price: 599 },
        { id: 19, name: "Apple Watch Series 7", price: 399 },
        { id: 20, name: "Apple Watch SE", price: 279 },
        { id: 21, name: "Apple Watch Series 6", price: 399 },
        { id: 22, name: "Apple Watch Series 5", price: 349 },
        { id: 23, name: "Apple Watch Series 4", price: 299 },
        { id: 24, name: "Apple Watch Series 3", price: 199 },
        { id: 25, name: "AirPods Pro", price: 249 },
        { id: 26, name: "AirPods", price: 159 },
        { id: 27, name: "MagSafe Charger", price: 39 },
        { id: 28, name: "MagSafe Cover", price: 49 },
        { id: 29, name: "AirPods Max", price: 549 },
        { id: 30, name: "Apple Pencil 2nd Gen", price: 129 }
    ];

    const cart = {
        items: [],
        totalItems: 0,
        totalPrice: 0,
    };

    const cartCountElement = document.getElementById('cart-count');
    const cartTotalElement = document.getElementById('cart-total');

    function updateCart() {
        cartCountElement.textContent = cart.totalItems;
        cartTotalElement.textContent = `$${cart.totalPrice.toFixed(2)}`;
    }

    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            cart.items.push(product);
            cart.totalItems += 1;
            cart.totalPrice += product.price;
            updateCart();
        }
    }

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const productId = parseInt(button.dataset.id);
            addToCart(productId);
        });
    });

    updateCart();
});
