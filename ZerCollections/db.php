<?php
$servername = "localhost";
$username = "root";  // MySQL kullanıcı adınız
$password = "";      // MySQL şifreniz
$dbname = "zercollection";

// Bağlantıyı oluşturma
$conn = new mysqli($servername, $username, $password, $dbname);

// Bağlantıyı kontrol etme
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>

