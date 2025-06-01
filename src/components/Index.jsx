import { Container, Row, Col } from "react-bootstrap";
import '../css/index.css'; 
import imagenImg from '../imagenes/principal1.jpg'; // Asegúrate de tener una imagen en esta ruta
const Index = ()=>{
    return(
        <Container className="mt-5">
      <Row className="align-items-center">
        <Col md={6} className="info-caja">
          <h1>Bienvenido al Sistema de Gestión de Alumnos</h1>
          <h4 className="text-muted">Administra tus estudiantes de manera sencilla</h4>
          <p className="info-parrafo">
            Este sistema te permite registrar, editar y eliminar alumnos, así como visualizar la lista completa de estudiantes. Utiliza el menú de navegación para acceder a las diferentes funcionalidades.
          </p>
        </Col>
        <Col md={6} className="text-center">
          <img
            src= {imagenImg}
            alt="Gestión de alumnos"
            className="img-principal"
          />
        </Col>
      </Row>
    </Container>
    )
}

export default Index;