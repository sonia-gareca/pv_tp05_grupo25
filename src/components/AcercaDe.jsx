import React from "react";


const AcercaDe = ()=>{
        const desarrolladores = [
        { name: 'Sonia Gareca', rol: 'Desarrolladora Frontend' },
        { name: 'Antonio Almada', rol: 'Desarrollador Backend / Lógica' },
        { name: 'Angelo Quiroga', rol: 'Diseño UX/UI / Frontend' },
        { name: 'Joaquín Calermo', rol: 'Gestión de Datos / Documentación' },
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
            <div className="developers-grid">
            {desarrolladores.map((dev, index) => (
                <div key={index} className="developer-card">
                <h3>{dev.name}</h3>
                <p>{dev.rol}</p>
                </div>
            ))}
            </div>
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