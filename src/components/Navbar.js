import { router } from '../router/router.js';

export class Navbar {
    constructor() {
        this.container = null;
    }

    render() {
        const currentRoute = router.getCurrentRoute();
        
        return `
        <nav class="navbar">
            <div class="nav-brand">
                <h2>Mi SPA</h2>
            </div>
            <ul class="nav-links">
                <li><a href="#/inicio" class="${currentRoute === '/inicio' ? 'active' : ''}">Inicio</a></li>
                <li><a href="#/sobre" class="${currentRoute === '/sobre' ? 'active' : ''}">Sobre</a></li>
                <li><a href="#/contacto" class="${currentRoute === '/contacto' ? 'active' : ''}">Contacto</a></li>
            </ul>
        </nav>
        `;
    }

    attachEventListeners() {
        window.addEventListener('hashchange', () => this.updateActiveLink());
    }

    updateActiveLink() {
        const currentRoute = router.getCurrentRoute();
        const links = document.querySelectorAll('.nav-links a');
        
        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentRoute}`) {
                link.classList.add('active');
            }
        });
    }

    destroy() {
        // Limpieza si es necesaria
    }
}