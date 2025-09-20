import { globalState } from '../router/state.js';

export class SobrePage {
    constructor() {
        globalState.subscribe((state) => this.onStateChange(state));
    }

    render() {
        return `
        <div class="page sobre-page">
            <section class="hero">
                <h1>Sobre Nosotros</h1>
                <p>Esta aplicación demuestra cómo construir una SPA ligera con JavaScript vanilla.</p>
            </section>
            <section class="tech-section">
                <h2>Tecnologías utilizadas</h2>
                <ul>
                    <li>Vite</li>
                    <li>JavaScript Vanilla</li>
                    <li>CSS3</li>
                    <li>HTML5</li>
                </ul>
            </section>
            <section class="counter-section">
                <h2>Contador Global (compartido)</h2>
                <div class="counter">
                    <span id="counter-value-sobre">${globalState.getState().counter}</span>
                </div>
            </section>
        </div>
        `;
    }

    onStateChange(state) {
        this.updateCounter(state.counter);
    }

    updateCounter(counter) {
        const counterElement = document.getElementById('counter-value-sobre');
        if (counterElement) {
            counterElement.textContent = counter;
        }
    }

    destroy() {
        // Limpieza si es necesaria
    }
}