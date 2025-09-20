class GlobalState {
    constructor() {
        this.state = {
            counter: 0,
            theme: 'light'
        };
        this.observers = [];
        this.loadFromStorage();
    }

    getState() {
        return { ...this.state };
    }

    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.saveToStorage();
        this.notifyObservers();
    }

    subscribe(callback) {
        this.observers.push(callback);
    }

    notifyObservers() {
        this.observers.forEach(callback => callback(this.state));
    }

    incrementCounter() {
        this.setState({ counter: this.state.counter + 1 });
    }

    decrementCounter() {
        this.setState({ counter: this.state.counter - 1 });
    }

    toggleTheme() {
        const newTheme = this.state.theme === 'light' ? 'dark' : 'light';
        this.setState({ theme: newTheme });
        document.body.setAttribute('data-theme', newTheme);
    }

    saveToStorage() {
        try {
            localStorage.setItem('spa-state', JSON.stringify(this.state));
        } catch (error) {
            console.error('Error guardando estado:', error);
        }
    }

    loadFromStorage() {
        try {
            const saved = localStorage.getItem('spa-state');
            if (saved) {
                this.state = { ...this.state, ...JSON.parse(saved) };
                document.body.setAttribute('data-theme', this.state.theme);
            }
        } catch (error) {
            console.error('Error cargando estado:', error);
        }
    }
}

export const globalState = new GlobalState();