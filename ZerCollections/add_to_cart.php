<?php
session_start();
require 'db_connection.php';

// Ürün ekleme işlemi
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Ürün ID'si ve fotoğraf yolunu al
    $product_id = $_POST['product_id'];

    // Veritabanından ürün bilgilerini al
    $sql = "SELECT name, price, image_path FROM products WHERE id = $product_id";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $name = $row['name'];
        $price = $row['price'];
        $imagePath = $row['image_path'];

        // Sepete ekleme işlemi
        // LocalStorage'da var mı kontrol et
        echo "
        <script>
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push({
                name: '$name',
                price: '$price',
                imageUrl: '$imagePath'
            });
            localStorage.setItem('cart', JSON.stringify(cart));
            alert('Ürün sepete eklendi!');
            window.location.href = 'index.php'; // Ana sayfaya yönlendir
        </script>
        ";
    } else {
        echo "Ürün bulunamadı!";
    }
}
?>