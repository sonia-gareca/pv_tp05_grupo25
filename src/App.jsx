import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import MenuNavegacion from './components/MenuNavegacion';
import Index from './components/Index';
import ListaEstudiantes from './components/ListaAlumno';
import AcercaDe from './components/AcercaDe';
import 'bootstrap/dist/css/bootstrap.min.css';
import NuevoAlumno from './components/NuevoAlumno';
import EditarAlumno from './components/EditarAlumno';
import { useCallback } from 'react';


function App() {

  const [alumnos, setAlumnos] = useState([]);

  const actualizarAlumno = (alumnoActualizado) => {
    setAlumnos(prev =>
      prev.map(a => a.lu === alumnoActualizado.lu ? alumnoActualizado : a)
    );
  };

  // Se usa useCallback en la funcion para ocultar el alumno de la lista
  const eliminarAlumno = useCallback(
    (luAEliminar) => {
      setAlumnos((prevAlumnos) =>
        prevAlumnos.map((a) =>
          a.lu === luAEliminar ? { ...a, eliminado: true } : a
        )
      );
    },
    [setAlumnos]
  );



  return (
    <div className='container'>
      <Routes>
        <Route path="/" element={<MenuNavegacion />} >
          <Route path="/index" element={<Index />} />
          <Route path="/listaestudiantes" element={<ListaEstudiantes alumnos={alumnos} eliminarAlumno={eliminarAlumno}/>} />
          <Route path="/nuevoAlumno" element={<NuevoAlumno alumnos={alumnos} setAlumnos={setAlumnos} />} />
          <Route path="/acercade" element={<AcercaDe />} />
          <Route path="/alumnos/:lu/editar" element={
            <EditarAlumno alumnos={alumnos} actualizarAlumno={actualizarAlumno} />
          } />
        </Route>

      </Routes>

    </div>
  )
}

export default App
