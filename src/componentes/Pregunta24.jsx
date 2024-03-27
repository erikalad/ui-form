import React, { useState } from 'react';
import './Pregunta.css';
import { Button, Progress } from 'antd';
import {ArrowLeftOutlined, ArrowRightOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom';

const Pregunta24 = () => {
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
        <div className='tracking-in-expand titulo'>Según su opinión, ¿Cuál es el principal atributo que valora de un político?</div>
        <div className='contenedor-caja-2'>
        <div
            className={`caja-valores-5  ${seleccionado === 4 ? 'seleccionado shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(4)}
          >
          Autoridad
          </div>
          <div
            className={`caja-valores-5  ${seleccionado === 3 ? 'seleccionado shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(3)}
          >
           Cercanía 
          </div>
          <div
            className={`caja-valores-5  ${seleccionado === 2 ? 'seleccionado shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(2)}
          >
           Coherencia
          </div>
          <div
            className={`caja-valores-5  ${seleccionado === 5 ? 'seleccionado shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(5)}
          >
         Dinamismo 
          </div>
       
          <div
            className={`caja-valores-5  ${seleccionado === 1 ? 'seleccionado shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(1)}
          >
           Eficiencia
          </div>
         
          <div
            className={`caja-valores-5  ${seleccionado === 0 ? 'seleccionado shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(0)}
          >
         Experiencia
          </div>

          <div
            className={`caja-valores-5  ${seleccionado === 6 ? 'seleccionado shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(6)}
          >
         Honestidad
          </div>

          <div
            className={`caja-valores-5  ${seleccionado === 7 ? 'seleccionado shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(7)}
          >
         Popularidad
          </div>
          <div
            className={`caja-valores-5  ${seleccionado === 8 ? 'seleccionado shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(8)}
          >
        Responsabilidad
          </div>
          <div
            className={`caja-valores-5  ${seleccionado === 9 ? 'seleccionado shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(9)}
          >
        Sensibilidad
          </div>
       
       
        
      
        </div>
        <div className='contenedor-boton'>

       <Link to='/23'> <Button type="primary" shape="circle" icon={<ArrowLeftOutlined />} className='boton-next'/></Link>
       <Link to='/25'> <Button type="primary" shape="circle" icon={<ArrowRightOutlined />} className='boton-next' disabled={botonDeshabilitado}/></Link>
        </div>
      </div>
      </div>
    </div>
    </>
  );
};

export default Pregunta24;