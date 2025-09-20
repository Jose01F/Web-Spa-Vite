export class ContactoPage {
    render() {
        return `
        <div class="page contacto-page">
            <section class="hero">
                <h1>Contacto</h1>
                <p>Ponte en contacto con nosotros.</p>
            </section>
            <section class="form-section">
                <form id="contact-form">
                    <div class="form-group">
                        <label for="name">Nombre:</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="message">Mensaje:</label>
                        <textarea id="message" name="message" rows="4" required></textarea>
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </section>
        </div>
        `;
    }

    attachEventListeners() {
        document.getElementById('contact-form')?.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Formulario enviado! (Esta es una demo)');
        });
    }

    destroy() {
        // Limpieza si es necesaria
    }
}