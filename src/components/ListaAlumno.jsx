import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ListaAlumno = ({ alumnos }) => {
    return (
        <div>
            <h1>Lista de Alumnos</h1>
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
                            <td>
                                <Link to={`/alumnos/${a.lu}/editar`}>
                                    <Button variant="warning" size="sm">Editar</Button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default ListaAlumno;