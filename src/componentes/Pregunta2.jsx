import React, { useState } from 'react';
import './Pregunta.css';
import { Button, Progress } from 'antd';
import {ArrowLeftOutlined, ArrowRightOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom';

const Pregunta2 = () => {
  const [seleccionado, setSeleccionado] = useState(null);
  const [botonDeshabilitado, setBotonDeshabilitado] = useState(true); // Estado para el botón
  const numero = parseInt(window.location.pathname.slice(1), 10);
  const progreso = (numero / 31) * 100;
  const handleClick = (index) => {
    setSeleccionado(index);
    setBotonDeshabilitado(false); // Cuando se selecciona algo, habilita el botón
  };

  return (
    <>
    <Progress percent={progreso} showInfo={false} strokeColor="#fa6400"/>
    <div className='contenedor-pregunta'>
    <div className='flip-in-hor-top '>
  
      <div className='carta'>
        <div className='tracking-in-expand'>¿Pordría indicarnos su género?</div>
        <div className='contenedor-caja-2'>
          <div
            className={`caja-valores-2 ${seleccionado === 0 ? 'seleccionado shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(0)}
          >
           Femenino
          </div>
          <div
            className={`caja-valores-2 ${seleccionado === 1 ? 'seleccionado shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(1)}
          >
           Masculino
          </div>
        
      
        </div>
        <div className='contenedor-boton'>

       <Link to='/1'> <Button type="primary" shape="circle" icon={<ArrowLeftOutlined />} className='boton-next'/></Link>
       <Link to='/3'> <Button type="primary" shape="circle" icon={<ArrowRightOutlined />} className='boton-next' disabled={botonDeshabilitado}/></Link>
        </div>
      </div>
      </div>
    </div>
    </>
  );
};

export default Pregunta2;