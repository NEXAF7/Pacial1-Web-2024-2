import logo from './logo.svg';
import Container from 'react-bootstrap/Container';
import Home from './components/home/home';
import Perfil from './components/perfil/perfil';
import Login from './components/login/login';
import HomeESP from './components/homeESP/homeESP';
import PerfilESP from './components/perfilESP/perfilESP';
import LoginESP from './components/loginESP/loginESP';

import './App.css';

function App() {
  return (
  <Container fluid>
    <Login />
    {/*<Home />*/}
    {/*<Perfil />*/}
    {/*<LoginESP />*/}
    {/*<HomeESP />*/}
    {/*<PerfilESP />*/}
  </Container>
  );
}

export default App;
