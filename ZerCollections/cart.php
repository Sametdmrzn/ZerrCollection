<?php
include 'header.php';
?>

<div class="container mt-4">
    <h2>Sepetiniz</h2>
    <div id="cart-items" class="row"></div> <!-- Sepet öğelerinin dinamik olarak listeleneceği alan -->
    <div id="cart-summary" class="mt-3"></div> <!-- Genel toplamın gösterileceği alan -->
</div>

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
    cartData.forEach((item, index) => {
        const { name, price } = item;
        totalPrice += parseFloat(price);

        // Her bir ürünü sepette göster
        const cartItem = document.createElement("div");
        cartItem.classList.add("col-md-4", "mb-4");
        cartItem.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">Fiyat: ${price}₺</p>
                    <button class="btn btn-danger remove-item" data-index="${index}">Ürünü Sil</button>
                </div>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    // Genel toplamı göster
    cartSummaryContainer.innerHTML = `
        <h3>Genel Toplam: ${totalPrice.toFixed(2)}₺</h3>
        <button class="btn btn-primary" id="complete-purchase">Alışverişi Tamamla</button>
    `;
}

// Ürünü silme işlevi
document.addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('remove-item')) {
        const index = e.target.getAttribute('data-index'); // Tıklanan butonun index değerini al
        cartData.splice(index, 1); // Sepetten öğeyi çıkar

        // Sepeti güncelle ve localStorage'a kaydet
        localStorage.setItem("cart", JSON.stringify(cartData));

        // Sayfayı yeniden yükle
        window.location.reload();
    }
});

// Alışverişi tamamlama işlevi
document.getElementById('complete-purchase').addEventListener('click', function () {
    if (cartData.length === 0) {
        alert("Sepetinizde ürün yok!");
        return;
    }

    // Sepet detaylarını metin formatına dönüştür
    let message = "Alışveriş Sepeti:\n";
    cartData.forEach(item => {
        message += `Ürün: ${item.name}, Fiyat: ${item.price}₺\n`;
    });
    message += `\nToplam: ${cartData.reduce((sum, item) => sum + parseFloat(item.price), 0).toFixed(2)}₺`;

    // WhatsApp linkini oluştur
    const phoneNumber = "+905469467889";  // WhatsApp numarası
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // WhatsApp'a yönlendir
    window.open(whatsappUrl, '_blank');
});
</script>

<?php
include 'footer.php';
?>
