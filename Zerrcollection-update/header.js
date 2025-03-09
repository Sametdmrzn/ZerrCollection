class MyHeader extends HTMLElement {
    connectedCallback() {
   this.innerHTML = `
            <header>


        


<nav class="navbar navbar-expand-lg navbar-light bg-light py-3">
    <div class="container">
        <!-- Marka Adı -->
        <a class="navbar-brand" href="#">ZerrCollection</a>

        <!-- Sepet İkonu (Mobilde Görünecek) -->
        <a href="sepet.html" class="d-lg-none ms-auto">
            <i class="fa-solid fa-cart-shopping fs-4 text-muted"></i>
        </a>

        <!-- Navbar Toggler (Mobil İçin) -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <!-- EŞARP Kategorisi -->
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownEsarp" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        EŞARP
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownEsarp">
                        <li><a class="dropdown-item" href="#">Flamlı Pamuk Eşarp</a></li>
                        <li><a class="dropdown-item" href="#">Taşlı Pamuk Eşarp</a></li>
                    </ul>
                </li>

                <!-- BONE Kategorisi -->
                <li class="nav-item"><a class="nav-link" href="#">BONE</a></li>

                <!-- HAVLU ÇEŞİTLERİ Kategorisi -->
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownHavlu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        HAVLU ÇEŞİTLERİ
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownHavlu">
                        <li><a class="dropdown-item" href="#">Mutfak Havlusu</a></li>
                        <li><a class="dropdown-item" href="#">El Yüz Havlusu</a></li>
                        <li><a class="dropdown-item" href="#">Banyo Havlusu</a></li>
                        <li><a class="dropdown-item" href="#">Ayak Havlusu</a></li>
                    </ul>
                </li>

                <!-- BAYAN ATLET Kategorisi -->
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownAtlet" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        BAYAN ATLET
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownAtlet">
                        <li><a href="#" class="dropdown-item">Kalın Askılı Atlet</a></li>
                        <li><a href="#" class="dropdown-item">İp Askılı Atlet</a></li>
                    </ul>
                </li>

                <!-- BAYAN İÇ GİYİM Kategorisi -->
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownIcGiyim" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        BAYAN İÇ GİYİM
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownIcGiyim">
                        <li><a href="#" class="dropdown-item">Bayan Bato</a></li>
                        <li><a href="#" class="dropdown-item">Sütyen</a></li>
                        <li><a href="#" class="dropdown-item">Bayan Çorap</a></li>
                    </ul>
                </li>

                <li class="nav-item"><a class="nav-link" href="#">BAYAN TAYT</a></li>
                <li class="nav-item"><a class="nav-link" href="#">BAYAN PİJAMA TAKIMI</a></li>
                <li class="nav-item"><a class="nav-link" href="#">BAYAN EŞOFMAN TAKIMI</a></li>
            </ul>

            <!-- Sepet İkonu (Masaüstü İçin) -->
            <a href="sepet.html" class="ms-3 d-none d-lg-block">
                <i class="fa-solid fa-cart-shopping fs-4 text-muted"></i>
            </a>
        </div>
    </div>
</nav>

    

            </header>
        `;
    }
}
customElements.define('my-header', MyHeader);
