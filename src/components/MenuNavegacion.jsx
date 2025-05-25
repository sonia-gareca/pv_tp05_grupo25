import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, Outlet } from 'react-router-dom';

function MenuNavegacion() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/index">Gestion Alumnos</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Opciones" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/index">Inicio</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/acercade">Acerca de</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/nuevoAlumno">Nuevo alumno</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/listaestudiantes">Lista de alumnos</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default MenuNavegacion;