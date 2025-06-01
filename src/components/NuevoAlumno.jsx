
import { Form, Button, Table, Alert,Row, Col } from "react-bootstrap";
import { useState } from "react";
import '../css/nuevoAlumno.css'

const NuevoAlumno = ({ alumnos, setAlumnos}) => {
  const [alumno, setAlumno] = useState({
    lu: "",
    nombre: "",
    apellido: "",
    curso: "",
    email: "",
    domicilio: "",
    telefono: "",
    eliminado: false,
  });
  
   const [showAlert, setShowAlert] = useState(false);
 // Maneja los cambios en los campos del formulario
  const handleChange = (e) => {
    setAlumno({
      ...alumno,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar que todos los campos estén completos
    if (
      alumno.lu &&
      alumno.nombre &&
      alumno.apellido &&
      alumno.curso &&
      alumno.email &&
      alumno.domicilio &&
      alumno.telefono
    ) {
      // Validamos si el LU existe y no este eliminado
      const luDuplicado = alumnos.some(
        (a) => a.lu === alumno.lu && !a.eliminado
      );
      if (luDuplicado) {
        alert("El LU ya existe para un alumno activo. Por favor, ingrese un LU único.");
        return;
      }
        // Agregar el nuevo alumno al estado
      setAlumnos([...alumnos, { ...alumno, eliminado: false}]);
      setAlumno({
        lu: "",
        nombre: "",
        apellido: "",
        curso: "",
        email: "",
        domicilio: "",
        telefono: "", 
        eliminado: false,
      });
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 2000); // Oculta el alert después de 2 segundos
    } else {
      alert("Por favor, complete todos los campos para agregar un alumno.");
    }
  };

  
  return (
    <div>
      <h1 className="titulo-nuevoalumno">Registrar Nuevo Alumno</h1>
        {showAlert && (
        <Alert variant="success">
          ¡Alumno agregado correctamente!
        </Alert>
      )}
     <Form onSubmit={handleSubmit} className="mb-4 form-nuevoalumno">
  <Row>
    <Col md={6}>
      <Form.Group className="mb-3">
        <Form.Label>LU</Form.Label>
        <Form.Control
          type="text"
          name="lu"
          value={alumno.lu}
          onChange={handleChange}
          placeholder="Ingrese el LU"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          name="nombre"
          value={alumno.nombre}
          onChange={handleChange}
          placeholder="Ingrese el nombre"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Apellido</Form.Label>
        <Form.Control
          type="text"
          name="apellido"
          value={alumno.apellido}
          onChange={handleChange}
          placeholder="Ingrese el apellido"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Curso</Form.Label>
        <Form.Control
          type="text"
          name="curso"
          value={alumno.curso}
          onChange={handleChange}
          placeholder="Ingrese el curso"
          required
        />
      </Form.Group>
    </Col>
    <Col md={6}>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={alumno.email}
          onChange={handleChange}
          placeholder="Ingrese el email"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Domicilio</Form.Label>
        <Form.Control
          type="text"
          name="domicilio"
          value={alumno.domicilio}
          onChange={handleChange}
          placeholder="Ingrese el domicilio"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control
          type="text"
          name="telefono"
          value={alumno.telefono}
          onChange={handleChange}
          placeholder="Ingrese el teléfono"
          required
        />
      </Form.Group>
    </Col>
  </Row>
  <div className="text-center mt-4">
    <Button variant="primary" type="submit" className="btn-nuevoalumno">
      Agregar Alumno
    </Button>
  </div>
</Form>


     {/* {alumnos.length > 0 && (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>LU</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Curso</th>
              <th>Email</th>
              <th>Domicilio</th>
              <th>Teléfono</th>
            </tr>
          </thead>
          <tbody>
            {alumnos.map((a, idx) => (
              <tr key={idx}>
                <td>{a.lu}</td>
                <td>{a.nombre}</td>
                <td>{a.apellido}</td>
                <td>{a.curso}</td>
                <td>{a.email}</td>
                <td>{a.domicilio}</td>
                <td>{a.telefono}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}*/}
    </div>
  );
}; 

export default NuevoAlumno;