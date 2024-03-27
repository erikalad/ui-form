import React, { useState } from 'react';
import './Pregunta.css';
import { Button, Progress } from 'antd';
import {ArrowLeftOutlined, ArrowRightOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom';

const Pregunta28 = () => {
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
        <div className='tracking-in-expand titulo'>¿Siente que en el país el futuro es previsible o que hay incertidumbre?</div>
        <div className='contenedor-caja-2'>
          <div
            className={`caja-valores-3 ${seleccionado === 0 ? 'seleccionado shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(0)}
          >
       Siento que
       <br/>es previsible
          </div>
          <div
            className={`caja-valores-3 ${seleccionado === 1 ? 'seleccionado shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(1)}
          >
Siento
<br/>incertidumbre
          </div>
          <div
            className={`caja-valores-3 ${seleccionado === 2 ? 'seleccionado shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(2)}
          >
 No sabe
          </div>
     
        
      
        </div>
        <div className='contenedor-boton'>

       <Link to='/27'> <Button type="primary" shape="circle" icon={<ArrowLeftOutlined />} className='boton-next'/></Link>
       <Link to='/29'> <Button type="primary" shape="circle" icon={<ArrowRightOutlined />} className='boton-next' disabled={botonDeshabilitado}/></Link>
        </div>
      </div>
      </div>
    </div>
    </>
  );
};

export default Pregunta28;