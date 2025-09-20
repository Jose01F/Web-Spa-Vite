class Router {
    constructor() {
        this.routes = {};
        this.currentPage = null;
        this.init();
    }

    init() {
        window.addEventListener('hashchange', () => this.handleRouteChange());
        window.addEventListener('load', () => this.handleRouteChange());
    }

    register(path, pageClass) {
        this.routes[path] = pageClass;
    }

    handleRouteChange() {
        const path = window.location.hash.slice(1) || '/inicio';
        this.navigateTo(path);
    }

    navigateTo(path) {
        const PageClass = this.routes[path];
        if (PageClass) {
            if (this.currentPage && this.currentPage.destroy) {
                this.currentPage.destroy();
            }
            this.currentPage = new PageClass();
            
            const mainContent = document.getElementById('main-content');
            if (mainContent) {
                mainContent.innerHTML = this.currentPage.render();
                if (this.currentPage.attachEventListeners) {
                    this.currentPage.attachEventListeners();
                }
            }
        } else {
            console.error(`Ruta no encontrada: ${path}`);
        }
    }

    getCurrentRoute() {
        return window.location.hash.slice(1) || '/inicio';
    }
}

export const router = new Router();