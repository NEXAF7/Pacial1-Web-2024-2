import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import fondo from '../../images/fondo.jpg';

const Perfil = () => {
    return (
        <Container fluid>
            <Row style={{height:"150vh",
                    backgroundImage:`url(${fondo})`,
                    backgroundSize:"cover",
                    backgroundPosition:"center",
                    width:"100%", zIndex: -1,
                    position:"absolute",
                    top: 0, left: 0,
                }}>
            </Row> 
        </Container>
    );
};

export default Perfil;