import { globalState } from '../router/state.js';

export class InicioPage {
    constructor() {
        this.container = null;
    }

    render() {
        return `
        <div class="page inicio-page">
            <section class="hero">
                <h1>¡Bienvenido a nuestra SPA!</h1>
                <p>Esta es una Single Page Application construida con Vite y JavaScript Vanilla.</p>
            </section>
            <section class="counter-section">
                <h2>Contador Global</h2>
                <div class="counter">
                    <button id="decrement">-</button>
                    <span id="counter-value">${globalState.getState().counter}</span>
                    <button id="increment">+</button>
                </div>
            </section>
        </div>
        `;
    }

    attachEventListeners() {
        document.getElementById('increment')?.addEventListener('click', () => {
            globalState.incrementCounter();
            this.updateCounter();
        });

        document.getElementById('decrement')?.addEventListener('click', () => {
            globalState.decrementCounter();
            this.updateCounter();
        });
    }

    updateCounter() {
        const counterElement = document.getElementById('counter-value');
        if (counterElement) {
            counterElement.textContent = globalState.getState().counter;
        }
    }

    destroy() {
        // Limpieza si es necesaria
    }
}