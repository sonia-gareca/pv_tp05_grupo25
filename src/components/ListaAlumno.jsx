import { Link } from 'react-router-dom';
import { useCallback } from 'react';
import { Table, Button, Alert } from 'react-bootstrap';
import NuevoAlumno from './NuevoAlumno';
const ListaAlumno = ({ alumnos, eliminarAlumno}) => {
    return (
        <div>
            <h1>Lista de Alumnos</h1>
            {alumnos.length === 0 ? (
                <Alert variant='info'>No hay alumnos registrados aún</Alert>
            ) : (
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
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
                    {alumnos.map((a, idx) => (
                        !a.eliminado && (//Solo renderiza si el alumno no esta eliminado
                        <tr key={a.lu}>
                            <td>{a.lu}</td>
                            <td>{a.nombre}</td>
                            <td>{a.apellido}</td>
                            <td>{a.curso}</td>
                            <td>{a.email}</td>
                            <td>{a.domicilio}</td>
                            <td>{a.telefono}</td>
                            <td>
                             <Link to={`/alumnos/${a.lu}/editar`}>
                                  <Button variant="warning" size="sm">Editar</Button>
                                </Link>

                                 <Button
                                     variant="danger"
                                  onClick={() => eliminarAlumno(a.lu)}
                                      size="sm"
                                   >
                                   Eliminar
                                </Button>
                            </td>
                        </tr>
                        )
                    ))}
                </tbody>
            </Table>
            )}
        </div>
    )
};

export default ListaAlumno;