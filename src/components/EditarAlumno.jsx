import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const EditarAlumno = ({ alumnos, actualizarAlumno }) => {
    const { lu } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        lu: '',
        nombre: '',
        apellido: '',
        curso: '',
        email: '',
        domicilio: '',
        telefono: ''
    });

    useEffect(() => {
        const alumno = alumnos.find(a => a.lu === lu);
        if (alumno) {
            setFormData(alumno);
        }
    }, [lu, alumnos]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        actualizarAlumno(formData);
        navigate('/listaestudiantes'); // Redirige a la lista
    };

    return (
        <div>
            <h2>Editar Alumno</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="lu">
                    <Form.Label>LU</Form.Label>
                    <Form.Control type="text" value={formData.lu} disabled />
                </Form.Group>

                <Form.Group controlId="nombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="apellido">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                        type="text"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                        required
                    />


 </Form.Group>

                <Form.Group controlId="curso">
                    <Form.Label>Curso</Form.Label>
                    <Form.Control
                        type="text"
                        name="curso"
                        value={formData.curso}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="domicilio">
                    <Form.Label>Domicilio</Form.Label>
                    <Form.Control
                        type="text"
                        name="domicilio"
                        value={formData.domicilio}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="telefono">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control
                        type="text"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3">
                    Guardar Cambios
                </Button>
            </Form>
        </div>
    );
};

export default EditarAlumno;              
// olvide escribir el mensaje en el commit anterior y hago este