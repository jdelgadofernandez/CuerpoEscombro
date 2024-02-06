import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from './img/logo.svg';
export default function test() {
  return (
    <div>
      <div class="ticker-wrap">
        <div class="ticker">
          <div class="ticker__item">POR TIEMPO LIMITADO. 25% DE DESCUENTO EN NUESTRA TARIFA DE RECUPERACION INTEGRAL SIEMPRE QUE SE HAGA DESDE LA WEB</div>
        </div>
        <div class="ticker2">
          <div class="ticker__item">POR TIEMPO LIMITADO. 25% DE DESCUENTO EN NUESTRA TARIFA DE RECUPERACION INTEGRAL SIEMPRE QUE SE HAGA DESDE LA WEB</div>
        </div>
      </div>
      <Navbar bg="dark" data-bs-theme="dark" id="navB">
        <Container id='nave'>
          <img
            alt=""
            src={logo}
            width="80"
            height="80"
            className="d-inline-block align-top"
          />{' '}
          <Navbar.Brand href="#portada" id="nombre">Cuerpo Escombro</Navbar.Brand>
          <Nav className="me-auto barrita">
            <Nav.Link href="#servicios">Nuestros Servicios</Nav.Link>
            <Nav.Link href="#personal">Nuestro personal</Nav.Link>
            <Nav.Link href="#pricing">Nuestros precios</Nav.Link>
            <Nav.Link href="#lugar">Donde Encontrarnos</Nav.Link>
            <Nav.Link href="#formulario">Pide Cita</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
