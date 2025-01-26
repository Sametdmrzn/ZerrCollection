<?php
include 'header.php';
?>

<h2>Sepetiniz</h2>
<div id="cart-items"></div> <!-- Sepet öğelerinin dinamik olarak listeleneceği alan -->
<div id="cart-summary"></div> <!-- Genel toplamın gösterileceği alan -->

<script>
// LocalStorage'dan sepet verilerini al
const cartData = JSON.parse(localStorage.getItem("cart")) || [];

// Sepeti gösterecek elementi seç
const cartItemsContainer = document.getElementById("cart-items");
const cartSummaryContainer = document.getElementById("cart-summary");

// Eğer sepet boşsa, bir mesaj göster
if (cartData.length === 0) {
    cartItemsContainer.innerHTML = "<p>Sepetiniz boş!</p>";
} else {
    let totalPrice = 0;

    // Sepet öğelerini listele
    cartData.forEach(item => {
        const { name, price } = item;
        totalPrice += parseFloat(price);

        // Her bir ürünü sepette göster
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <div class="cart-item-details">
                <h3>${name}</h3>
                <p>Fiyat: ${price}₺</p>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    // Genel toplamı göster
    cartSummaryContainer.innerHTML = `
        <h3>Genel Toplam: ${totalPrice.toFixed(2)}₺</h3>
    `;
}
</script>

<?php
include 'footer.php';
?>
