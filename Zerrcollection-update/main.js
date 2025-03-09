    // Dropdown menülerine Bootstrap'in tıklanarak açılma işlevini ekle
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

    // Sayfanın başka bir yerinde tıklanırsa tüm menüleri kapat
    document.addEventListener('click', function(event) {
        var dropdowns = document.querySelectorAll('.dropdown-menu');
        dropdowns.forEach(function(menu) {
            if (!menu.contains(event.target)) {
                menu.style.display = 'none'; // Menüleri kapat
            }
        });
    });
