import React, { useState } from 'react';
import { Container } from "react-bootstrap";

const Color = ({color}) => {

    return (
        <Container>
        <div className="border" style={{ backgroundColor: color, width: '200px', height: '200px' }}></div>
        </Container>
    );
};

export default Color;