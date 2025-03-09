class myFooter extends HTMLElement {
    connectedCallback() {
   this.innerHTML = `
            <header>



<!-- Footer -->
<footer class="bg-dark text-white text-center py-4 mt-5">
    <div class="container">
        <p class="mb-1">&copy; 2025 Zerrcollection</p>
        <p class="mb-0">Tüm hakları saklıdır</p>
    </div>
</footer>




                `;
    }
}
customElements.define('my-footer', myFooter);
