import logo from './logo.svg';
import Container from 'react-bootstrap/Container';
import Home from './components/home/home';
import Perfil from './components/perfil/perfil';
import Login from './components/login/login';

import './App.css';

function App() {
  return (
  <Container fluid>
    <Home />
    {/*<Perfil />*/}
    {/*<Login />*/}
  </Container>
  );
}

export default App;
