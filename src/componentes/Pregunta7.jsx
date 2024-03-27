import React, { useState } from 'react';
import './Pregunta.css';
import { Button, Progress } from 'antd';
import {ArrowLeftOutlined, ArrowRightOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom';


const Pregunta7 = () => {
    const [seleccionado, setSeleccionado] = useState(null);
    const [botonDeshabilitado, setBotonDeshabilitado] = useState(true); // Estado para el botón
  
    const handleClick = (index) => {
      setSeleccionado(index);
      setBotonDeshabilitado(false); // Cuando se selecciona algo, habilita el botón
    };
    const numero = parseInt(window.location.pathname.slice(1), 10);
  const progreso = (numero / 31) * 100;


  return (
    <>
    <Progress percent={progreso} showInfo={false} strokeColor="#fa6400"/>
    <div className='contenedor-pregunta-grande'>
    <div className='rotate-in-2-tr-ccw'>
  
      <div className='carta-grande'>
        <div className='tracking-in-expand'>En las elecciones presidenciales de 2018, ¿Recuerda por quién votó?</div>
        <div className='contenedor-pregunta4'>
            <div>
          <div
            className={`caja-valores ${seleccionado === 0 ? 'seleccionado-pregunta4 shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(0)}
          >
          <div>Andrés Manuel López Obrador, de Morena</div>
          <div className='subtitulo-pregunta4'>Juntos Haremos Historia</div>
          </div>
          <div
            className={`caja-valores ${seleccionado === 1 ? 'seleccionado-pregunta4 shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(1)}
          >
         Ricardo Anaya Cortés, del PAN
         <div className='subtitulo-pregunta4'>Por México al Frente</div>
          </div>
          <div
            className={`caja-valores ${seleccionado === 2 ? 'seleccionado-pregunta4 shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(2)}
          >
         José Antonio Meade Kuribreña, del PRI
         <div className='subtitulo-pregunta4'>Todos por México</div>
          </div>
          <div
            className={`caja-valores ${seleccionado === 3 ? 'seleccionado-pregunta4 shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(3)}
          >
          Jaime Rodríguez Calderón, candidato independiente
          <div className='subtitulo-pregunta4'>Prohibido Rendirse</div>
          </div>
          <div
            className={`caja-valores ${seleccionado === 4 ? 'seleccionado-pregunta4 shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(4)}
          >
         Margarita Zavala, candidato independiente
         <div className='subtitulo-pregunta4'>Valor es Margarita</div>
          </div>
          </div>
          <div>
          <div
            className={`caja-valores ${seleccionado === 5 ? 'seleccionado-pregunta4 shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(5)}
          >
        Voto en blanco
          </div>
          <div
            className={`caja-valores ${seleccionado === 6 ? 'seleccionado-pregunta4 shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(6)}
          >
       No sabe
          </div>
          <div
            className={`caja-valores ${seleccionado === 7 ? 'seleccionado-pregunta4 shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(7)}
          >
      No votó
          </div>
          </div>
        </div>
        <div className='contenedor-boton'>

       <Link to='/6'> <Button type="primary" shape="circle" icon={<ArrowLeftOutlined />} className='boton-next'/></Link>
       <Link to='/8'> <Button type="primary" shape="circle" icon={<ArrowRightOutlined />} className='boton-next' disabled={botonDeshabilitado}/></Link>
        </div>
      </div>
      </div>
    </div>
    </>
  );
};

export default Pregunta7;