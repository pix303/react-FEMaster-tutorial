import React from 'react';
import { createRoot } from 'react-dom/client';
import PetComponent from "./Pet";

const App = () => {
    return (
        <div>
            <PetComponent name='Banana' breed='Golden retriver' age={5} />
            <PetComponent name='Gustav' breed='Pastore tedesco' age={50} />
            <PetComponent name='Lilli' breed='Cocker' age={2} />
        </div>
    )
}

const container = document.getElementById("root");
if (container) {
    const root = createRoot(container);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}