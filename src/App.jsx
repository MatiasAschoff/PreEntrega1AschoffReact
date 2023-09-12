import './App.css'
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import tienda from './img/tienda.png';

function App() {
  return (
    <div>
    <Navbar />
    <ItemListContainer greeting="Bienvenido a Tienda Nikos, tú tienda de confianza."/>
    <img src={tienda} alt="Imagen de tienda en construcción" width="600" height="600" />
    </div>
  );
}

export default App
