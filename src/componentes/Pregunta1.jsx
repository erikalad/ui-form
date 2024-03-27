import React, { useState } from 'react';
import './Pregunta.css';
import { Button, Progress } from 'antd';
import {ArrowRightOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom';

const Pregunta1 = () => {
  const [seleccionado, setSeleccionado] = useState(null);
  const [botonDeshabilitado, setBotonDeshabilitado] = useState(true); // Estado para el botón
  const numero = parseInt(window.location.pathname.slice(1), 10);
  const progreso = (numero / 31) * 100;

  const handleClick = (index) => {
    setSeleccionado(index);
    setBotonDeshabilitado(false); // Cuando se selecciona algo, habilita el botón
  };

  const linkTo = seleccionado === 0 ? '/exit' : '/2';
  return (
    <>
    <Progress percent={progreso} showInfo={false} strokeColor="#fa6400"/>
    <div className='contenedor-pregunta'>
    <div className='flip-in-ver-right '>
      <div className='carta'>
        <div className='tracking-in-expand empezando'>Para empezar, ¿podría indicarnos su edad?</div>
        <div>
          <div
            className={`caja-valores ${seleccionado === 0 ? 'seleccionado shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(0)}
          >
            Menor de 18 años
          </div>
          <div
            className={`caja-valores ${seleccionado === 1 ? 'seleccionado shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(1)}
          >
            18 a 26 años
          </div>
          <div
            className={`caja-valores ${seleccionado === 2 ? 'seleccionado shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(2)}
          >
            27 a 42 años
          </div>
          <div
            className={`caja-valores ${seleccionado === 3 ? 'seleccionado shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(3)}
          >
            43 a 58 años
          </div>
          <div
            className={`caja-valores ${seleccionado === 4 ? 'seleccionado shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(4)}
          >
            Más de 58 años
          </div>
      
        </div>
        <Link to={linkTo}><div className='contenedor-boton'>
        <Button type="primary" shape="circle" icon={<ArrowRightOutlined />} className='boton-next' disabled={botonDeshabilitado}/>
        </div>
        </Link>
      </div>
     
    </div>
    </div>
    </>
  );
};

export default Pregunta1;