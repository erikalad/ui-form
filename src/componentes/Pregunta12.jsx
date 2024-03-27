import React, { useState } from 'react';
import './Pregunta.css';
import { Button, Progress } from 'antd';
import {ArrowLeftOutlined, ArrowRightOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom';

const Pregunta12 = () => {
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
    <div className='flip-in-ver-right'>
  
      <div className='carta'>
        <div className='tracking-in-expand titulo'>¿Usted podría votar a un candidato de Movimiento Ciudadano como presidente?</div>
        <div className='contenedor-pregunta4'>
            <div>
          <div
            className={`caja-valores ${seleccionado === 0 ? 'seleccionado-pregunta4 shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(0)}
          >
          <div>Sí, lo votaría con seguridad</div>
        
          </div>
          <div
            className={`caja-valores ${seleccionado === 1 ? 'seleccionado-pregunta4 shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(1)}
          >
     Podría votarlo
          </div>

          <div
            className={`caja-valores ${seleccionado === 2 ? 'seleccionado-pregunta4 shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(2)}
          >
No, no lo votaría nunca
  
          </div>


          <div
            className={`caja-valores ${seleccionado === 3 ? 'seleccionado-pregunta4 shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(3)}
          >
No sabe
          </div>
          
          </div>
        </div>
        <div className='contenedor-boton'>

       <Link to='/11'> <Button type="primary" shape="circle" icon={<ArrowLeftOutlined />} className='boton-next'/></Link>
       <Link to='/13'> <Button type="primary" shape="circle" icon={<ArrowRightOutlined />} className='boton-next' disabled={botonDeshabilitado}/></Link>
        </div>
      </div>
      </div>
    </div>
    </>
  );
};

export default Pregunta12;