import { Table, Button, ButtonGroup, Badge, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/listaAlumnos.css";

const ListaAlumno = ({ alumnos, eliminarAlumno }) => {
  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center">Lista de Alumnos</h2>
      <Table striped bordered hover responsive className="shadow rounded">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>LU</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Curso</th>
            <th>Email</th>
            <th>Domicilio</th>
            <th>Teléfono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.filter(a => !a.eliminado).length === 0 ? (
            <tr>
              <td colSpan="9" className="text-center text-muted">
                <Badge bg="secondary">No hay alumnos registrados</Badge>
              </td>
            </tr>
          ) : (
            alumnos
              .filter(a => !a.eliminado)
              .map((a, idx) => (
                <tr key={a.lu}>
                  <td>{idx + 1}</td>
                  <td><Badge bg="info">{a.lu}</Badge></td>
                  <td>{a.nombre}</td>
                  <td>{a.apellido}</td>
                  <td>{a.curso}</td>
                  <td>{a.email}</td>
                  <td>{a.domicilio}</td>
                  <td>{a.telefono}</td>
                  <td>
                    <ButtonGroup>
                      <Link to={`/alumnos/${a.lu}/editar`}>
                        <Button variant="warning" size="sm">
                          Editar
                        </Button>
                      </Link>
                      <Button
                        variant="danger"
                        size="sm"
                        className="ms-2"
                        onClick={() => eliminarAlumno(a.lu)}
                      >
                        Eliminar
                      </Button>
                    </ButtonGroup>
                  </td>
                </tr>
              ))
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default ListaAlumno;