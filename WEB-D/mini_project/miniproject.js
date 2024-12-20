// Search Bar Filter
const searchInput = document.getElementById('searchBar');
const products = document.querySelectorAll('.pro');
        
searchInput.addEventListener('input', function() {
    const query = searchInput.value.toLowerCase();

    products.forEach(product => {
        const productName = product.querySelector('.des h5').textContent.toLowerCase();
        if (productName.includes(query)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});

// Cart Animation
const cartIcon = document.getElementById('cartIcon');
cartIcon.addEventListener('click', function() {
    cartIcon.classList.add('animate-cart');
    setTimeout(() => {
        cartIcon.classList.remove('animate-cart');
    }, 500);
});

// Modal for Product Details
const modal = document.getElementById('productModal');
const closeModal = document.querySelector('.close-modal');

products.forEach(product => {
    product.addEventListener('click', function() {
        const title = product.querySelector('.des h5').textContent;
        const imgSrc = product.querySelector('img').src;
        const description = product.querySelector('.des span').textContent;
        const price = product.querySelector('.des h4').textContent;

        document.getElementById('modalTitle').textContent = title;
        document.getElementById('modalImage').src = imgSrc;
        document.getElementById('modalDescription').textContent = description;
        document.getElementById('modalPrice').textContent = price;

        modal.style.display = 'block';
    });
});

closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
