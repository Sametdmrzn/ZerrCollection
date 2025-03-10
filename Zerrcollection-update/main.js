// ✅ Dropdown menülerine Bootstrap'in tıklanarak açılma işlevini ekle
document.querySelectorAll('.dropdown-toggle').forEach(function(dropdown) {
    dropdown.addEventListener('click', function(event) {
        var dropdownMenu = this.nextElementSibling; // Menü öğesini bul
        if (dropdownMenu.style.display === 'block') {
            dropdownMenu.style.display = 'none'; // Eğer açık ise, kapat
        } else {
            dropdownMenu.style.display = 'block'; // Eğer kapalı ise, aç
        }
        event.stopPropagation(); // Diğer menülerin kapanmasını engelle
    });
});

// ✅ Sayfanın başka bir yerinde tıklanırsa tüm menüleri kapat
document.addEventListener('click', function(event) {
    var dropdowns = document.querySelectorAll('.dropdown-menu');
    dropdowns.forEach(function(menu) {
        if (!menu.contains(event.target)) {
            menu.style.display = 'none'; // Menüleri kapat
        }
    });
});

// ✅ Ürünleri göstermek için değişken
let allProducts = [];

// ✅ JSON'dan verileri çek
fetch("products.json")
    .then(response => response.json())
    .then(products => {
        allProducts = products;

        // Sayfa yüklendiğinde kategori varsa, ona göre filtreleme yap
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category') || "all"; // Varsayılan olarak "all" kullan
        showProducts(category);
    });

// ✅ Ürünleri kategoriye göre gösteren fonksiyon
// ✅ Ürünleri kategoriye göre gösteren fonksiyon
function showProducts(category) {
    let productContainer = document.getElementById("product-list");
    productContainer.innerHTML = ""; // Önce temizle

    let filteredProducts = (category === "all") ? allProducts : allProducts.filter(p => p.category === category);

    filteredProducts.forEach(product => {
        productContainer.innerHTML += `
            <div class="col-md-4">
                <div class="card mb-4">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.price} TL</p>
                        <button class="btn btn-primary" onclick="addToCart(${product.id})">Sepete Ekle</button>
                    </div>
                </div>
            </div>
        `;
    });
}


// ✅ Sepete ürün ekleyen fonksiyon
function addToCart(productId) {
    // Seçilen ürünü bul
    let selectedProduct = allProducts.find(p => p.id === productId);
    if (!selectedProduct) return;

    // Mevcut sepeti localStorage'dan al
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Ürün zaten varsa adedini artır
    let existingProduct = cart.find(p => p.id === productId);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        // Yeni ürünü sepete ekle
        cart.push({ ...selectedProduct, quantity: 1 });
    }

    // Güncellenmiş sepeti localStorage'a kaydet
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Ürün sepete eklendi! 🛒");
}



// ✅ WhatsApp’a doğrudan mesaj gönderen fonksiyon
function sendOrderDirectly() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        alert("Sepetiniz boş! 📭");
        return;
    }

    let message = "📦 *Yeni Sipariş* %0A%0A"; // Başlık
    cart.forEach((product, index) => {
        message += `${index + 1}. *${product.name}* - ${product.quantity} adet - ${product.price * product.quantity} TL %0A`;
    });

    message += `%0A📞 *Müşteri Sipariş Verdi!*`; // Ek bilgi

    // WhatsApp numaranı buraya yaz (ülke kodu ile birlikte)
    let phoneNumber = "905309455209";   // Örn: 905555123456 (Türkiye için)

    // WhatsApp URL'si oluştur
    let whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

    // Kullanıcıdan onay almadan yeni sekmede WhatsApp'ı aç
    window.open(whatsappUrl, "_blank");
}
