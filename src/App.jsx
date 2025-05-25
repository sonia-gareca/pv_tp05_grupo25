import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import MenuNavegacion from './components/MenuNavegacion';
import Index from './components/Index';
import ListaEstudiantes from './components/ListaAlumno';
import AcercaDe from './components/AcercaDe';
import 'bootstrap/dist/css/bootstrap.min.css';
import NuevoAlumno from './components/NuevoAlumno';


function App() {
  
const [alumnos, setAlumnos] = useState([]);


  return (
    <div className='container'>
      <Routes>
        <Route path="/" element={<MenuNavegacion />} >
          <Route path="/index" element={<Index />} />
          <Route path="/listaestudiantes" element={<ListaEstudiantes alumnos={alumnos}/>} />
          <Route path="/nuevoAlumno" element={<NuevoAlumno alumnos={alumnos} setAlumnos={setAlumnos} />} />
          <Route path="/acercade" element={<AcercaDe />} />
        </Route>

      </Routes>

    </div>
  )
}

export default App
