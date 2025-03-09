class MyHeader extends HTMLElement {
    connectedCallback() {
   this.innerHTML = `
            <header>


        


<nav class="navbar navbar-expand-lg navbar-light bg-light py-3">
    <div class="container">
        <!-- Marka Adı -->
        <a class="navbar-brand" href="index.html">ZerrCollection</a>

        <!-- Sepet İkonu (Mobilde Görünecek) -->
        <a href="sepet.html" class="d-lg-none ms-auto">
            <i class="fa-solid fa-cart-shopping fs-4 text-muted"></i>
        </a>

        <!-- Navbar Toggler (Mobil İçin) -->
        <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <!-- EŞARP Kategorisi -->
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="products.html?category=esarp" id="navbarDropdownEsarp" role="button" data-bs-toggle="dropdown">
                        EŞARP
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="products.html?category=flamli-pamuk">Flamlı Pamuk Eşarp</a></li>
                        <li><a class="dropdown-item" href="products.html?category=tasli-pamuk">Taşlı Pamuk Eşarp</a></li>
                    </ul>
                </li>

                <!-- BONE Kategorisi -->
                <li class="nav-item"><a class="nav-link" href="products.html?category=bone">BONE</a></li>

                <!-- HAVLU ÇEŞİTLERİ Kategorisi -->
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="products.html?category=havlu" id="navbarDropdownHavlu" role="button" data-bs-toggle="dropdown">
                        HAVLU ÇEŞİTLERİ
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="products.html?category=mutfak-havlusu">Mutfak Havlusu</a></li>
                        <li><a class="dropdown-item" href="products.html?category=el-yuz-havlusu">El Yüz Havlusu</a></li>
                        <li><a class="dropdown-item" href="products.html?category=banyo-havlusu">Banyo Havlusu</a></li>
                        <li><a class="dropdown-item" href="products.html?category=ayak-havlusu">Ayak Havlusu</a></li>
                    </ul>
                </li>

                <!-- BAYAN ATLET Kategorisi -->
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="products.html?category=atlet" id="navbarDropdownAtlet" role="button" data-bs-toggle="dropdown">
                        BAYAN ATLET
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="products.html?category=kalin-askili">Kalın Askılı Atlet</a></li>
                        <li><a class="dropdown-item" href="products.html?category=ip-askili">İp Askılı Atlet</a></li>
                    </ul>
                </li>

                <!-- BAYAN İÇ GİYİM Kategorisi -->
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="products.html?category=icgiyim" id="navbarDropdownIcGiyim" role="button" data-bs-toggle="dropdown">
                        BAYAN İÇ GİYİM
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="products.html?category=bayan-bato">Bayan Bato</a></li>
                        <li><a class="dropdown-item" href="products.html?category=sutyen">Sütyen</a></li>
                        <li><a class="dropdown-item" href="products.html?category=bayan-corap">Bayan Çorap</a></li>
                    </ul>
                </li>

                <!-- Diğer Kategoriler -->
                <li class="nav-item"><a class="nav-link" href="products.html?category=tayt">BAYAN TAYT</a></li>
                <li class="nav-item"><a class="nav-link" href="products.html?category=pijama">BAYAN PİJAMA TAKIMI</a></li>
                <li class="nav-item"><a class="nav-link" href="products.html?category=esofman">BAYAN EŞOFMAN TAKIMI</a></li>
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
