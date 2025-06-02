import { Link } from 'react-router-dom';
import { Table, Button, Alert } from 'react-bootstrap';
import '../css/listaAlumnos.css';
import { useState } from 'react';

const ListaAlumno = ({ alumnos, eliminarAlumno}) => {
    // Creamos un estado para controlar la renderizacion de los detalles
    const [mostrarDetalles, setMostrarDetalles] = useState(false);

    // Fiitramos los alumnos que no estan eliminados
    const alumnosActivos = alumnos.filter(a => !a.eliminado);

    return (
        <div>
            <h1 className="titulo-lista">Lista de Alumnos</h1>
            {alumnosActivos.length === 0 ? (
                <Alert variant='info'>No hay alumnos registrados aún</Alert>
            ) : (
                <>
                    <Button
                        variant="info"
                        onClick={() => setMostrarDetalles(!mostrarDetalles)}
                        className="mb-3"    
                    >
                        {mostrarDetalles ? 'Ocultar Detalles' : 'Mostrar  Todos Detalles'} 
                    </Button>


                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>LU</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                {mostrarDetalles && (
                                    <>
                                        <th>Curso</th>
                                        <th>Email</th>
                                        <th>Domicilio</th>
                                        <th>Teléfono</th>
                                    </>
                                )}
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {alumnosActivos.map((a) => (
        
                                <tr key={a.lu}>
                                    <td>{a.lu}</td>
                                    <td>{a.nombre}</td>
                                    <td>{a.apellido}</td>
                                    {mostrarDetalles && (
                                        <>
                                            <td>{a.curso}</td>
                                            <td>{a.email}</td>
                                            <td>{a.domicilio}</td>
                                            <td>{a.telefono}</td>
                                        </>
                                    )}
                                    
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
                                
                            ))}
                        </tbody>
                    </Table>
                </>
            )}
        </div>
    );
};

export default ListaAlumno;