import React, { useState } from 'react';
import './Pregunta.css';
import { Button, Progress } from 'antd';
import {ArrowLeftOutlined, ArrowRightOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom';
import {Radio, Space } from 'antd';

const Pregunta5 = () => {
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
    <div className='contenedor-pregunta-grande'>
    <div className='flip-in-ver-right'>
  
      <div className='carta-grande'>
        <div className='tracking-in-expand titulo'>Podría indicarnos en ¿qué municipio del Estado de México reside actualmente?</div>
        <div className='contenedor-pregunta4'>

    <Radio.Group onChange={onChange} value={value}>
      <Space direction="vertical">
        <Radio value={1}>Chimalhuacán</Radio>
         <hr color='#eaeaea'/>
        <Radio value={2}>Cuautitlán Izcalli</Radio>
         <hr color='#eaeaea'/>
        <Radio value={3}>Ecatepec de Morelos</Radio>
         <hr color='#eaeaea'/>
        <Radio value={4}>Ixtapaluca</Radio>
         <hr color='#eaeaea'/>
         <Radio value={5}>Naucalpan de Juárez</Radio>
         <hr color='#eaeaea'/>
         <Radio value={6}>Nezahualcóyotl</Radio>
         <hr color='#eaeaea'/>
         <Radio value={7}>Tecámac</Radio>
         <hr color='#eaeaea'/>
         <Radio value={8}>Tlalnepantla de Baz</Radio>
         <hr color='#eaeaea'/>
         <Radio value={9}>Toluca</Radio>
         <hr color='#eaeaea'/>
         <Radio value={10}>Otro</Radio>
         <hr color='#eaeaea'/>
      </Space>
    </Radio.Group>
          
        </div>
        <div className='contenedor-boton'>

       <Link to='/4'> <Button type="primary" shape="circle" icon={<ArrowLeftOutlined />} className='boton-next'/></Link>
       <Link to='/7'> <Button type="primary" shape="circle" icon={<ArrowRightOutlined />} className='boton-next' disabled={botonDeshabilitado}/></Link>
        </div>
      </div>
      </div>
    </div>
    </>
  );
};

export default Pregunta5;