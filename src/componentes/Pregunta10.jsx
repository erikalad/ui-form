import React, { useState } from 'react';
import './Pregunta.css';
import { Button, Progress } from 'antd';
import {ArrowLeftOutlined, ArrowRightOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom';
import {Radio, Space } from 'antd';

const Pregunta10 = () => {
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
        <div className='tracking-in-expand titulo'>En relación a las distintas propuestas políticas, ¿Usted podría votar a un candidato de la coalición Juntos Hacemos Historia como presidente?</div>
        <div className='contenedor-pregunta4'>

    <Radio.Group onChange={onChange} value={value}>
      <Space direction="vertical">
        <Radio value={1}>Sí, lo votaría con seguridad</Radio>
         <hr color='#eaeaea'/>
        <Radio value={2}>Podría votarlo</Radio>
         <hr color='#eaeaea'/>
        <Radio value={3}>No, no lo votaría nunca</Radio>
         <hr color='#eaeaea'/>
        <Radio value={4}>No sabe</Radio>
         <hr color='#eaeaea'/>
      </Space>
    </Radio.Group>
          
        </div>
        <div className='contenedor-boton'>

       <Link to='/9'> <Button type="primary" shape="circle" icon={<ArrowLeftOutlined />} className='boton-next'/></Link>
       <Link to='/11'> <Button type="primary" shape="circle" icon={<ArrowRightOutlined />} className='boton-next' disabled={botonDeshabilitado}/></Link>
        </div>
      </div>
      </div>
    </div>
    </>
  );
};

export default Pregunta10;