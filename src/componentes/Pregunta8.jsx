import React, { useState } from 'react';
import './Pregunta.css';
import { Button, Progress } from 'antd';
import {ArrowLeftOutlined, ArrowRightOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom';

const Pregunta8 = () => {
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
  
      <div className='carta'>
        <div className='tracking-in-expand titulo'>Si las elecciones a presidente fueran hoy, ¿A cuál de las siguientes coaliciones votaría?</div>
        <div className='contenedor-pregunta4'>
            <div>
          <div
            className={`caja-valores ${seleccionado === 0 ? 'seleccionado-pregunta4 shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(0)}
          >
          <div>Juntos Hacemos Historia</div>
          <div className='subtitulo-pregunta4'>MORENA + PT + PVEM</div>
          </div>
          <div
            className={`caja-valores ${seleccionado === 1 ? 'seleccionado-pregunta4 shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(1)}
          >
        Frente Amplio por México
         <div className='subtitulo-pregunta4'>PRI + PAN + PRD</div>
          </div>

          <div
            className={`caja-valores ${seleccionado === 5 ? 'seleccionado-pregunta4 shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(5)}
          >
      Movimiento Ciudadano 
      <div className='subtitulo-pregunta4'>MC</div>
          </div>
          </div>
          <div>
          <div
            className={`caja-valores ${seleccionado === 6 ? 'seleccionado-pregunta4 shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(6)}
          >
       Voto en blanco 
          </div>
          <div
            className={`caja-valores ${seleccionado === 7 ? 'seleccionado-pregunta4 shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(7)}
          >
     Otro
          </div>
          <div
            className={`caja-valores ${seleccionado === 8 ? 'seleccionado-pregunta4 shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(8)}
          >
     No sabe
          </div>
          </div>
        </div>
        <div className='contenedor-boton'>

       <Link to='/7'> <Button type="primary" shape="circle" icon={<ArrowLeftOutlined />} className='boton-next'/></Link>
       <Link to='/9'> <Button type="primary" shape="circle" icon={<ArrowRightOutlined />} className='boton-next' disabled={botonDeshabilitado}/></Link>
        </div>
      </div>
      </div>
    </div>
    </>
  );
};

export default Pregunta8;