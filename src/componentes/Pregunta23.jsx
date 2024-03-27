import React, { useState } from 'react';
import './Pregunta.css';
import { Button, Progress } from 'antd';
import {ArrowLeftOutlined, ArrowRightOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom';

const Pregunta23 = () => {
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
    <div className='contenedor-pregunta'>
    <div className='flip-in-hor-top '>
  
      <div className='carta'>
        <div className='tracking-in-expand titulo'>¿Cuál es la principal emoción que le produce la situación política en la actualidad?</div>
        <div className='contenedor-caja-2'>
        <div
            className={`caja-valores-4  ${seleccionado === 4 ? 'seleccionado shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(4)}
          >
          Alegría
          </div>
          <div
            className={`caja-valores-4  ${seleccionado === 3 ? 'seleccionado shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(3)}
          >
           Anticipación 
          </div>
          <div
            className={`caja-valores-4  ${seleccionado === 2 ? 'seleccionado shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(2)}
          >
           Confianza
          </div>
          <div
            className={`caja-valores-4  ${seleccionado === 5 ? 'seleccionado shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(5)}
          >
         Ira 
          </div>
       
          <div
            className={`caja-valores-4  ${seleccionado === 1 ? 'seleccionado shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(1)}
          >
           Miedo
          </div>
         
          <div
            className={`caja-valores-4  ${seleccionado === 0 ? 'seleccionado shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(0)}
          >
         Rechazo
          </div>

          <div
            className={`caja-valores-4  ${seleccionado === 6 ? 'seleccionado shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(6)}
          >
         Sorpresa
          </div>

          <div
            className={`caja-valores-4  ${seleccionado === 7 ? 'seleccionado shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(7)}
          >
         Tristeza
          </div>
          <div
            className={`caja-valores-4  ${seleccionado === 8 ? 'seleccionado shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(8)}
          >
         No sabe
          </div>
       
       
        
      
        </div>
        <div className='contenedor-boton'>

       <Link to='/22'> <Button type="primary" shape="circle" icon={<ArrowLeftOutlined />} className='boton-next'/></Link>
       <Link to='/24'> <Button type="primary" shape="circle" icon={<ArrowRightOutlined />} className='boton-next' disabled={botonDeshabilitado}/></Link>
        </div>
      </div>
      </div>
    </div>
    </>
  );
};

export default Pregunta23;