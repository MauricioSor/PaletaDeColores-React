import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 
import Color from './Color';
const Cards = ({ colores, borrarColor }) => {
    return (
        <section className='d-flex'>
            {colores.map((color, indiceColor) => (
                <Card className=" mx-2 my-2" key={indiceColor}>
                    <div className="card-body">
                        <h5 className="card-title">Color: {color}</h5>
                    </div>
                    <div>
                        <Color color={color}></Color>
                    </div>
                <Button className='my-2' variant='danger' onClick={() =>borrarColor(color)}>Borrar</Button>
                </Card>
            ))}
        </section>
    );
    }
    export default Cards