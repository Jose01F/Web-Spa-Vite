import './style.css';
import { router } from './router/router.js';
import { Navbar } from './components/Navbar.js';
import { Footer } from './components/Footer.js';
import { InicioPage } from './pages/Inicio.js';
import { SobrePage } from './pages/Sobre.js';
import { ContactoPage } from './pages/Contacto.js';

class App {
    constructor() {
        this.navbar = new Navbar();
        this.footer = new Footer();
        this.init();
    }

    init() {
        this.setupDOM();
        this.setupRoutes();
        this.setupGlobalListeners();
    }

    setupDOM() {
        const app = document.getElementById('app');
        app.innerHTML = `
        <div class="app-container">
            <header id="navbar-container">
                ${this.navbar.render()}
            </header>
            <main id="main-content">
                <!-- El contenido de las páginas se inyecta aquí -->
            </main>
            <footer id="footer-container">
                ${this.footer.render()}
            </footer>
        </div>
        `;

        this.navbar.attachEventListeners();
    }

    setupRoutes() {
        router.register('/inicio', InicioPage);
        router.register('/sobre', SobrePage);
        router.register('/contacto', ContactoPage);
    }

    setupGlobalListeners() {
        window.addEventListener('hashchange', () => {
            this.updateNavbar();
        });
    }

    updateNavbar() {
        const navbarContainer = document.getElementById('navbar-container');
        if (navbarContainer) {
            navbarContainer.innerHTML = this.navbar.render();
            this.navbar.attachEventListeners();
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new App();
});
