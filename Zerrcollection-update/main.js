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
                        <p class="card-text">${product.price}</p>
                        <a href="product.html?id=${product.id}" class="btn btn-primary">İncele</a>
                    </div>
                </div>
            </div>
        `;
    });
}
