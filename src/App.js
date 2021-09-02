import './App.css';
import Mensaje from './Mensaje.js';


const Descripcion = () => {
  return <p>Esta es la app del curso fullstack bootcamp</p>
}

const App = () => {
  return (
    <div className="App">
      <h1>Titulo de la app</h1>
      <strong>Estamos trabajando en ello</strong>
      <Mensaje message='Estamos trabajando'/>
      <Mensaje message='en un curso'/>
      <Mensaje message='de React'/>
      <Descripcion/>
    </div>
  );
}

export default App;
