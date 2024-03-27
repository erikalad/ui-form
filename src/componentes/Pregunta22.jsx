import React, { useState } from 'react';
import './Pregunta.css';
import { Button, Progress } from 'antd';
import {ArrowLeftOutlined, ArrowRightOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom';
import { Input, Radio, Space } from 'antd';

const Pregunta22 = () => {
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
        <div className='tracking-in-expand titulo'>¿Cuál de los siguientes ejes debería priorizar la gestión local?</div>
        <div className='contenedor-pregunta4'>

    <Radio.Group onChange={onChange} value={value}>
      <Space direction="vertical">
        <Radio value={1}>Reparación y pavimentación de calles</Radio>
         <hr color='#eaeaea'/>
        <Radio value={2}>Limpieza y recolección de basura</Radio>
         <hr color='#eaeaea'/>
        <Radio value={3}>Mantenimiento de espacios públicos</Radio>
         <hr color='#eaeaea'/>
        <Radio value={4}>Alumbrado público</Radio>
         <hr color='#eaeaea'/>
         <Radio value={5}>Acceso a la vivienda</Radio>
         <hr color='#eaeaea'/>
         <Radio value={6}>Presencia policial</Radio>
         <hr color='#eaeaea'/>
         <Radio value={7}>Mejora del transporte público y paradas</Radio>
         <hr color='#eaeaea'/>
         <Radio value={8}>Inversión en el sistema de salud municipal</Radio>
         <hr color='#eaeaea'/>
         <Radio value={9}>Cortes de luz</Radio>
         <hr color='#eaeaea'/>
         <Radio value={10}>Falta de oportunidades laborales</Radio>
         <hr color='#eaeaea'/>
      </Space>
    </Radio.Group>
          
        </div>
        <div className='contenedor-boton'>

       <Link to='/21'> <Button type="primary" shape="circle" icon={<ArrowLeftOutlined />} className='boton-next'/></Link>
       <Link to='/23'> <Button type="primary" shape="circle" icon={<ArrowRightOutlined />} className='boton-next' disabled={botonDeshabilitado}/></Link>
        </div>
      </div>
      </div>
    </div>
    </>
  );
};

export default Pregunta22;