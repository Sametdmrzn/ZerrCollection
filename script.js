// Hamburger menüyü açıp kapatmak için JS kodu
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


document.addEventListener('DOMContentLoaded', function () {
    const cartButtons = document.querySelectorAll('.add-to-cart');

    cartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productName = this.getAttribute('data-name');
            const productPrice = this.getAttribute('data-price');

            // Sepeti localStorage'dan al
            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            // Ürünü sepete ekle
            cart.push({ name: productName, price: productPrice });

            // Sepeti güncelle ve localStorage'a kaydet
            localStorage.setItem('cart', JSON.stringify(cart));

            alert(productName + " sepete eklendi!");
        });
    });
});