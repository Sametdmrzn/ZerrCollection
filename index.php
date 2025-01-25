
<?php
include 'header.php';
include 'db.php'; 
?>

<body>

<header>
    <h1>ZerColection</h1>
</header>

<nav>
    <div class="logo">
    </div>
    <ul class="nav-links">
        <?php
        // Veritabanından navbar bağlantılarını çekme
        $sql = "SELECT label, url FROM navbar_links";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                echo "<li><a href='" . $row['url'] . "'>" . $row['label'] . "</a></li>";
            }
        } else {
            echo "No links found.";
        }
        ?>
    </ul>
    <div class="hamburger" id="hamburger">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
    </div>
</nav>

<div class="banner">
    <img src="resimler/Gray Minimalist New Collection Banner.png" alt="Banner Image">
</div>



<script src="script.js"></script>
</body>
</html>



<?php
include 'footer.php';
?>


<?php $conn->close(); 