
import ReactDOM from 'react-dom/client'; // Cambia la importación
import App from './App';
import './index.css'; // Asegúrate de que la ruta sea correcta
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement); // Usa createRoot
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
