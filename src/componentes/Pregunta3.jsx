import React, { useState } from 'react';
import './Pregunta.css';
import { Button, Progress } from 'antd';
import {ArrowLeftOutlined, ArrowRightOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom';
import {  Radio, Space } from 'antd';

const Pregunta3 = () => {

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
    <div className='rotate-in-2-tr-ccw'>
  
      <div className='carta'>
        <div className='tracking-in-expand'>¿Cuál es el máximo nivel de educación completo?</div>
        <div className='contenedor-caja-2'>
        <Radio.Group onChange={onChange} value={value}>
      <Space direction="vertical">
        <Radio value={1}>Primario</Radio>
        <hr color='#eaeaea'/>
        <Radio value={2}>Secundario</Radio>
            <hr color='#eaeaea'/>
        <Radio value={3}>Terciario</Radio>
            <hr color='#eaeaea'/>
        <Radio value={4}>Universitario</Radio>
            <hr color='#eaeaea'/>
        <Radio value={5}>Posgrado</Radio>
            <hr color='#eaeaea'/>
      </Space>
    </Radio.Group>
    </div>
        <div className='contenedor-boton'>

       <Link to='/2'> <Button type="primary" shape="circle" icon={<ArrowLeftOutlined />} className='boton-next'/></Link>
       <Link to='/4'> <Button type="primary" shape="circle" icon={<ArrowRightOutlined />} className='boton-next' disabled={botonDeshabilitado}/></Link>
        </div>
      </div>
      </div>
    </div>
    </>
  );
};

export default Pregunta3;