import { Card, Row, Col } from "react-bootstrap";
import soniaImg from '../imagenes/sonia.jpeg';
import joaquinImg from '../imagenes/joaquin.jpeg';
import antonioImg from '../imagenes/antonio.jpeg';
import angeloImg from '../imagenes/angelo.jpeg';
import '../css/acercaDe.css'; // Asegúrate de tener un archivo CSS para estilos personalizados
const AcercaDe = ()=>{
        const desarrolladores = [
           {
      name: 'Sonia Gareca',
      rol: 'Desarrolladora Frontend',
      img: soniaImg
    },
    {
      name: 'Antonio Almada',
      rol: 'Desarrollador Backend / Lógica',
      img: antonioImg
    },
    {
      name: 'Angelo Quiroga',
      rol: 'Diseño UX/UI / Frontend',
      img: angeloImg
    },
    {
      name: 'Joaquín Calermo',
      rol: 'Gestión de Datos / Documentación',
      img: joaquinImg
    },
    ];
    

    return(
        <div className="acerca-de-container">
        <h1>Acerca de Nuestro Proyecto</h1>
        <p className="descripcion-proyecto">
            Este es un sistema de gestión CRUD (Crear, Leer, Actualizar, Eliminar) diseñado para instituciones educativas.
            Permite llevar un control eficiente de la información de los alumnos, facilitando la administración
            y el acceso a los datos relevantes.
        </p>

        <div className="tecnologias-usadas">
            <h2>Tecnologías Utilizadas</h2>
            <ul>
            <li>Frontend: React.js (con Hooks como `useState`, `useMemo`, `useCallback`)</li>
            <li>Estilos: Bootstrap</li>
            <li>Lenguaje: JavaScript</li>
            <li>Control de Versiones: Git & GitHub</li>
            </ul>
        </div>

        <div className="equipo-desarrollo">
        <h2>Nuestro Equipo de Desarrollo</h2>
        <Row className="g-4">
          {desarrolladores.map((dev, index) => (
            <Col key={index} xs={12} sm={6} md={3}>
              <Card className="h-100 text-center">
                <Card.Img
                  variant="top"
                  src={dev.img}
                  alt={dev.name}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{dev.name}</Card.Title>
                  <Card.Text>{dev.rol}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

        <div className="contacto">
            <h2>Contacto</h2>
            <p>
            Para cualquier consulta o sugerencia sobre el sistema, no duden en contactarnos.
            </p>
            <p>¡Gracias por usar nuestra aplicación!</p>
        </div>
        </div>
    )
}

export default AcercaDe;