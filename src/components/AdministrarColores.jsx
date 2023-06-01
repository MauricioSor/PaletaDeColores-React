import React from 'react';
import { Form, Row,Col,Container,Button } from 'react-bootstrap';
import Color from './Color';
import Cards from './Cards';
import Boton from './Boton';
import { useState, useEffect } from "react";


const AdministrarColores = () => {

const coloresDelLocalStorage = JSON.parse(localStorage.getItem('listaColores')) || [];
const [color, setColor] = useState(''); // Estado para el color
const [colores, setColores] = useState(coloresDelLocalStorage);

useEffect(() => {
    localStorage.setItem('listaColores', JSON.stringify(colores));
}, [colores]);

const handleInputChange = (e) => {
    e.preventDefault();
    setColor(e.target.value);
};

const handleSubmit =(e)=>{
    e.preventDefault();
    setColores([...colores, color]);
    localStorage.setItem('listaColores', JSON.stringify(colores));
    setColor('');
}
const borrarColor = (nombreColor)=>{
    let copiaColores = colores.filter((itemColor)=> itemColor !== nombreColor);
    setColores(copiaColores);
}
    return (
        <>
            <Container className='border bg-dark my-5'>
                <h4 className='text-start text-light pt-3'>Administrar colores</h4>
                <hr className='text-light' />
                <Form className='text-light my-3' onSubmit={handleSubmit}>
                    <Row>
                        <Col  md={4} className="d-flex align-items-center justify-content-center">
                            <Form.Group className="" controlId="exampleForm.ControlInput1">
                            <Color color={color} ></Color>
                            </Form.Group></Col>
                        <Col md={6} className="d-flex align-items-center justify-content-center">
                            <Form.Group  controlId="exampleForm.ControlTextarea1" >
                            <Form.Control  value={color} onChange ={handleInputChange} as="textarea" placeholder='Ingrese un color pj. Blue' rows={5} cols={60} />
                            </Form.Group>
                        </Col>
                    </Row>
                <Boton></Boton>               
                </Form>
                <Cards colores={colores} borrarColor={borrarColor}></Cards>
            </Container>
        </>
    );
};

export default AdministrarColores;