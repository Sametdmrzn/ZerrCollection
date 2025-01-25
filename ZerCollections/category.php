<?php
include 'header.php';
include 'db.php';

// Kategori ID'sini URL'den al
$category_id = isset($_GET['id']) ? intval($_GET['id']) : 0;

// Kategori bilgisi
if ($category_id > 0) {
    // Hazırlanmış ifade kullanarak sorgu
    $stmt = $conn->prepare("SELECT name FROM categories WHERE id = ?");
    $stmt->bind_param("i", $category_id);
    $stmt->execute();
    $category_result = $stmt->get_result();

    if ($category_result->num_rows > 0) {
        $category_name = $category_result->fetch_assoc()['name'];
        echo "<h2>$category_name</h2>";
    } else {
        echo "<p>Geçersiz kategori.</p>";
        exit;
    }
} else {
    echo "<p>Geçersiz kategori.</p>";
    exit;
}


// Kategoriye ait ürünleri veritabanından çek
$sql = "SELECT * FROM products WHERE category_id = $category_id";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<div class='products'>";
    while ($product = $result->fetch_assoc()) {
        echo "<div class='product'>";
        echo "<img src='" . $product['image_url'] . "' alt='" . $product['name'] . "'>";
        echo "<h3>" . $product['name'] . "</h3>";
        echo "<p>" . $product['description'] . "</p>";
        echo "<p>Price: $" . $product['price'] . "</p>";
        echo "</div>";
    }
    echo "</div>";
} else {
    echo "<p>Bu kategoride ürün bulunamadı.</p>";
}

include 'footer.php';
?>
