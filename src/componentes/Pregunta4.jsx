import React, { useState } from 'react';
import './Pregunta.css';
import { Button, Progress } from 'antd';
import {ArrowLeftOutlined, ArrowRightOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom';

const Pregunta4 = () => {
    const [seleccionado, setSeleccionado] = useState(null);
    const [botonDeshabilitado, setBotonDeshabilitado] = useState(true); // Estado para el botón
    const numero = parseInt(window.location.pathname.slice(1), 10);
  const progreso = (numero / 31) * 100;
    const handleClick = (index) => {
      setSeleccionado(index);
      setBotonDeshabilitado(false); // Cuando se selecciona algo, habilita el botón
    };
  
    const linkTo = seleccionado === 0 ? '/5' : seleccionado === 1 ? '/6' : '/7' 

  return (
    <>
    <Progress percent={progreso} showInfo={false} strokeColor="#fa6400"/>
    <div className='contenedor-pregunta'>
    <div className='rotate-in-2-tr-ccw'>
  
      <div className='carta'>
        <div className='tracking-in-expand'>Seleccione la entidad de México en la cual reside actualmente.</div>
        <div className='contenedor-pregunta4'>
            <div>
          <div
            className={`caja-valores ${seleccionado === 0 ? 'seleccionado-pregunta4 shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(0)}
          >
          <div>Estado de México</div>
          </div>
          <div
            className={`caja-valores ${seleccionado === 1 ? 'seleccionado-pregunta4 shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(1)}
          >
       Ciudad de México   
          </div>
          <div
            className={`caja-valores ${seleccionado === 2 ? 'seleccionado-pregunta4 shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(2)}
          >
        Otra entidad	
          </div>
     
          </div>
        </div>
        <div className='contenedor-boton'>

       <Link to='/3'> <Button type="primary" shape="circle" icon={<ArrowLeftOutlined />} className='boton-next'/></Link>
       <Link to={linkTo}> <Button type="primary" shape="circle" icon={<ArrowRightOutlined />} className='boton-next' disabled={botonDeshabilitado}/></Link>
        </div>
      </div>
      </div>
    </div>
    </>
  );
};

export default Pregunta4;