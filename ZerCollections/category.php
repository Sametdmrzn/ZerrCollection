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

?>

<div class="container mt-4">
    <h1 class="text-center mb-4"><?php echo $category_name; ?> Kategorisi</h1>

    <?php
    if ($result->num_rows > 0) {
        echo "<div class='row'>";
        while ($product = $result->fetch_assoc()) {
            echo "<div class='col-md-4 mb-4'>";
            echo "<div class='card'>";
            echo "<img src='" . $product['image_path'] . "' class='card-img-top' alt='" . $product['name'] . "'>";
            echo "<div class='card-body'>";
            echo "<h5 class='card-title'>" . $product['name'] . "</h5>";
            echo "<p class='card-text'>Fiyat: ₺" . $product['price'] . "</p>";
            echo "<button class='btn btn-primary add-to-cart' data-name='" . $product['name'] . "' data-price='" . $product['price'] . "'>Sepete Ekle</button>";
            echo "</div>";
            echo "</div>";
            echo "</div>";
        }
        echo "</div>";
    } else {
        echo "<p>Bu kategoride ürün bulunamadı.</p>";
    }
    ?>
</div>

<?php
include 'footer.php';
?>

<script src="script.js"></script>
