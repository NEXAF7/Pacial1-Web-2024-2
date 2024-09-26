import logo from './logo.svg';
import Container from 'react-bootstrap/Container';
import Home from './components/home/home';
import Perfil from './components/perfil/perfil';
import DetallePost from './components/detallePost/detallePost';

import './App.css';

function App() {
  return (
  <Container fluid>
    <Home />
    {/*<Perfil />*/}
    {/*<DetallePost />*/}
  </Container>
  );
}

export default App;
