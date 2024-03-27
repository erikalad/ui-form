import React, { useState } from 'react';
import './Pregunta.css';
import { Button, Progress } from 'antd';
import {ArrowLeftOutlined, ArrowRightOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom';

const Pregunta9 = () => {
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
    <div className='flip-in-ver-right'>
  
      <div className='carta-grande'>
        <div className='tracking-in-expand titulo'>Si las elecciones a presidente fueran hoy, ¿A cuál de los siguientes candidatos votaría?</div>
        <div className='contenedor-pregunta4'>
            <div>
          <div
            className={`caja-valores ${seleccionado === 0 ? 'seleccionado-pregunta4 shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(0)}
          >
          <div>Claudia Sheinbaum Pardo</div>
          <div className='subtitulo-pregunta4'>Juntos Hacemos Historia</div>
          </div>
          <div
            className={`caja-valores ${seleccionado === 1 ? 'seleccionado-pregunta4 shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(1)}
          >
       Bertha Xóchitl Gálvez Ruiz
         <div className='subtitulo-pregunta4'>del Frente Amplio por México </div>
          </div>

          <div
            className={`caja-valores ${seleccionado === 2 ? 'seleccionado-pregunta4 shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(2)}
          >
       Eduardo Verastegui
       <div className='subtitulo-pregunta4'>candidato independiente</div>
         <div className='subtitulo-pregunta4'>MC</div>
          </div>


          <div
            className={`caja-valores ${seleccionado === 3 ? 'seleccionado-pregunta4 shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(3)}
          >
  Marcelo Ebrard Casaubón
  <div className='subtitulo-pregunta4'>sin coalición definida</div>
          </div>
          <div
            className={`caja-valores ${seleccionado === 4 ? 'seleccionado-pregunta4 shadow-drop-2-center' : ''}`}
            onClick={() => handleClick(4)}
          >
      Samuel Garcia
      <div className='subtitulo-pregunta4'> de Movimiento Ciudadano</div>
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
          </div>
        </div>
        <div className='contenedor-boton'>

       <Link to='/8'> <Button type="primary" shape="circle" icon={<ArrowLeftOutlined />} className='boton-next'/></Link>
       <Link to='/10'> <Button type="primary" shape="circle" icon={<ArrowRightOutlined />} className='boton-next' disabled={botonDeshabilitado}/></Link>
        </div>
      </div>
      </div>
    </div>
    </>
  );
};

export default Pregunta9;