import React from 'react';
import Pregunta1 from './componentes/Pregunta1';
import Nav from './componentes/Nav';
import Pregunta2 from './componentes/Pregunta2';
import { Route, Routes } from 'react-router';
import Terminar from './componentes/Terminar';
import Pregunta3 from './componentes/Pregunta3';
import Pregunta4 from './componentes/Pregunta4';
import Pregunta5 from './componentes/Pregunta5';
import Pregunta6 from './componentes/Pregunta6';
import Pregunta7 from './componentes/Pregunta7';
import Pregunta8 from './componentes/Pregunta8';
import Pregunta9 from './componentes/Pregunta9';
import Pregunta10 from './componentes/Pregunta10';
import Pregunta11 from './componentes/Pregunta11';
import Pregunta12 from './componentes/Pregunta12';
import Pregunta13 from './componentes/Pregunta13';
import Pregunta14 from './componentes/Pregunta14';
import Pregunta15 from './componentes/Pregunta15';
import Pregunta16 from './componentes/Pregunta16';
import Pregunta17 from './componentes/Pregunta17';
import Pregunta18 from './componentes/Pregunta18';
import Pregunta19 from './componentes/Pregunta19';
import Pregunta20 from './componentes/Pregunta20';
import Pregunta21 from './componentes/Pregunta21';
import Pregunta22 from './componentes/Pregunta22';
import Pregunta23 from './componentes/Pregunta23';
import Pregunta24 from './componentes/Pregunta24';
import Pregunta25 from './componentes/Pregunta25';
import Pregunta26 from './componentes/Pregunta26';
import Pregunta27 from './componentes/Pregunta27';
import Pregunta28 from './componentes/Pregunta28';
import Pregunta29 from './componentes/Pregunta29';
import Pregunta30 from './componentes/Pregunta30';
import Pregunta31 from './componentes/Pregunta31';



const App = () => {

  return (
    <div className="App">
        <Nav/>
      <Routes>
      <Route path="/" element={<Pregunta1 />} />
      <Route path="/1" element={<Pregunta1 />} />
      <Route path="/2" element={<Pregunta2 />} />
      <Route path="/3" element={<Pregunta3 />} />
      <Route path="/4" element={<Pregunta4 />} />
      <Route path="/5" element={<Pregunta5 />} />
      <Route path="/6" element={<Pregunta6 />} />
      <Route path="/7" element={<Pregunta7 />} />
      <Route path="/8" element={<Pregunta8 />} />
      <Route path="/9" element={<Pregunta9 />} />
      <Route path="/10" element={<Pregunta10 />} />
      <Route path="/11" element={<Pregunta11 />} />
      <Route path="/12" element={<Pregunta12 />} />
      <Route path="/13" element={<Pregunta13 />} />
      <Route path="/14" element={<Pregunta14 />} />
      <Route path="/15" element={<Pregunta15 />} />
      <Route path="/16" element={<Pregunta16 />} />
      <Route path="/17" element={<Pregunta17 />} />
      <Route path="/18" element={<Pregunta18 />} />
      <Route path="/19" element={<Pregunta19 />} />
      <Route path="/20" element={<Pregunta20 />} />
      <Route path="/21" element={<Pregunta21 />} />
      <Route path="/22" element={<Pregunta22 />} />
      <Route path="/23" element={<Pregunta23 />} />
      <Route path="/24" element={<Pregunta24 />} />
      <Route path="/25" element={<Pregunta25 />} />
      <Route path="/26" element={<Pregunta26 />} />
      <Route path="/27" element={<Pregunta27 />} />
      <Route path="/28" element={<Pregunta28 />} />
      <Route path="/29" element={<Pregunta29 />} />
      <Route path="/30" element={<Pregunta30 />} />
      <Route path="/31" element={<Pregunta31 />} />
      <Route path="/exit" element={<Terminar />} />
      </Routes>
    </div>
  );
};

export default App;