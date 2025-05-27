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
               