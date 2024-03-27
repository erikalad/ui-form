import React, { useState } from 'react';
import './Pregunta.css';
import { Button, Progress } from 'antd';
import {ArrowLeftOutlined, ArrowRightOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom';
import { Radio, Space } from 'antd';

const Pregunta21 = () => {
  const [botonDeshabilitado, setBotonDeshabilitado] = useState(false); // Estado para el botón
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    setValue(e.target.value);
  };

  
  const numero = parseInt(window.location.pathname.slice(1), 10);
  const progreso = (numero / 31) * 100;



  return (
    <>
    <Progress percent={progreso} showInfo={false} strokeColor="#fa6400"/>
    <div className='contenedor-pregunta'>
    <div className='flip-in-ver-right'>
  
      <div className='carta'>
        <div className='tracking-in-expand titulo'>¿Cuál es para usted el problema más importante a resolver en México?</div>
        <div className='contenedor-pregunta4'>

    <Radio.Group onChange={onChange} value={value}>
      <Space direction="vertical">
        <Radio value={1}>Inflación</Radio>
         <hr color='#eaeaea'/>
        <Radio value={2}>Situación sanitaria</Radio>
         <hr color='#eaeaea'/>
        <Radio value={3}>Vivienda</Radio>
         <hr color='#eaeaea'/>
        <Radio value={4}>Trabajo</Radio>
         <hr color='#eaeaea'/>
         <Radio value={5}>Inseguridad</Radio>
         <hr color='#eaeaea'/>
         <Radio value={6}>Narcotráfico</Radio>
         <hr color='#eaeaea'/>
         <Radio value={7}>Educación</Radio>
         <hr color='#eaeaea'/>
         <Radio value={8}>Corrupción</Radio>
         <hr color='#eaeaea'/>
         <Radio value={9}>Ambiente</Radio>
         <hr color='#eaeaea'/>
         <Radio value={10}>Justicia</Radio>
         <hr color='#eaeaea'/>
      </Space>
    </Radio.Group>
          
        </div>
        <div className='contenedor-boton'>

       <Link to='/20'> <Button type="primary" shape="circle" icon={<ArrowLeftOutlined />} className='boton-next'/></Link>
       <Link to='/22'> <Button type="primary" shape="circle" icon={<ArrowRightOutlined />} className='boton-next' disabled={botonDeshabilitado}/></Link>
        </div>
      </div>
      </div>
    </div>
    </>
  );
};

export default Pregunta21;