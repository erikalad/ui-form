import React, { useState } from 'react';
import './Pregunta.css';
import { Button, Progress } from 'antd';
import {ArrowLeftOutlined, ArrowRightOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom';

const Pregunta19 = () => {
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
    <div className='flip-in-hor-top '>
  
      <div className='carta-grande'>
        <div className='tracking-in-expand titulo'>En relación al gobierno estatal, ¿Usted se considera oficialista u opositor?</div>
        <div className='contenedor-caja-2'>
          <div
            className={`caja-valores-3 ${seleccionado === 0 ? 'seleccionado shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(0)}
          >
          Apoyo al gobierno 
          <br/>estatal
          </div>
          <div
            className={`caja-valores-3 ${seleccionado === 1 ? 'seleccionado shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(1)}
          >
Estoy en la oposición 
<br/>al gobierno estatal
          </div>
          <div
            className={`caja-valores-3 ${seleccionado === 3 ? 'seleccionado shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(3)}
          >
    Ni apoyo ni 
     <br/>soy opositor

          </div>
          <div
            className={`caja-valores-3 ${seleccionado === 4 ? 'seleccionado shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(4)}
          >
No sabe

          </div>
        
      
        </div>
        <div className='contenedor-boton'>

       <Link to='/18'> <Button type="primary" shape="circle" icon={<ArrowLeftOutlined />} className='boton-next'/></Link>
       <Link to='/20'> <Button type="primary" shape="circle" icon={<ArrowRightOutlined />} className='boton-next' disabled={botonDeshabilitado}/></Link>
        </div>
      </div>
      </div>
    </div>
    </>
  );
};

export default Pregunta19;