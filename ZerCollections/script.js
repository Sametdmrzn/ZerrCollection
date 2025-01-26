// Hamburger menüsünü seç
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

// Hamburger menüsüne tıklandığında menüyü aç/kapat

document.addEventListener('DOMContentLoaded', function () {
    const cartButtons = document.querySelectorAll('.add-to-cart');  // Butonları hedefle

    if (cartButtons.length > 0) {  // Butonların var olup olmadığını kontrol et
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

                alert(productName + " sepete eklendi!");  // Uyarı
            });
        });
    } else {
        console.log('No add-to-cart buttons found.');
    }
});
