<?php
include('db.php');  // Veritabanı bağlantısını dahil et
?>

<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="style.css">
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <title>ZerCollection</title>
</head>
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

</body>
</html>
