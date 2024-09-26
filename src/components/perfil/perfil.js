import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import fondo from '../../images/fondo.jpg';
import foto from '../../images/flor.jpg';

const Perfil = () => {
    return (
        <Container fluid>
            <Row style={{height:"130vh",
                    backgroundImage:`url(${fondo})`,
                    backgroundSize:"cover",
                    backgroundPosition:"center",
                    width:"100%", zIndex: -1,
                    position:"absolute",
                    top: 0, left: 0,
                }}>
            </Row> 
            <Row style={{height:"115vh", backgroundColor:"white", marginTop:"5vh",
                    marginLeft:"30vh", marginRight:"30vh", borderRadius: "15px",
                }}> 
            <Col>
            <br></br>
            <image style={{height:"20vh",
                    backgroundImage:`url(${foto})`,
                    backgroundSize:"cover",
                    backgroundPosition:"center",
                    marginLeft:"95vh", marginTop:"6vh",
                    width:"10%", zIndex: 1,
                    position:"absolute", borderRadius: "50%",
                    top: 0, left: 0,}}>
            </image>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <text style={{marginTop:"1vh", marginLeft:"35vh", fontSize:"20px", color:"black"}}>
                Nombre de Usuario:
            </text>
            <br></br>
            <input style={{borderColor:"black", height:"10vh",
                width:"80vh", marginTop:"2px", marginBottom:"10px",
                marginLeft:"35vh", borderWidth:"4px", 
                borderRadius: "3px", borderStyle: "solid",
                fontSize:"30px", textAlign: "left"}}defaultValue="Username">
                </input>
            <br></br>
            <text style={{marginTop:"1vh", marginLeft:"35vh", fontSize:"20px", color:"black"}}>
                Nombre Completo:
            </text>
            <br></br>
            <input style={{borderColor:"black", height:"10vh",
                width:"80vh", marginTop:"2px", marginBottom:"10px",
                marginLeft:"35vh", borderWidth:"4px", 
                borderRadius: "3px", borderStyle: "solid",
                fontSize:"30px", textAlign: "left"}}defaultValue="Nombre completo">
                </input>
            <br></br>
            <text style={{marginTop:"1vh", marginLeft:"35vh", fontSize:"20px", color:"black"}}>
                Descripción del Perfil:
            </text>
            <br></br>
            <input style={{borderColor:"black", height:"10vh",
                width:"80vh", marginTop:"2px", marginBottom:"10px",
                marginLeft:"35vh", borderWidth:"4px", 
                borderRadius: "3px", borderStyle: "solid",
                fontSize:"30px", textAlign: "left"}}defaultValue="Descripción del perfil">
                </input>
            <br></br>
            <text style={{marginTop:"1vh", marginLeft:"35vh", fontSize:"20px", color:"black"}}>
                Url Página Personal:
            </text>
            <br></br>
            <input style={{borderColor:"black", height:"10vh",
                width:"80vh", marginTop:"2px",
                marginLeft:"35vh", borderWidth:"4px", 
                borderRadius: "3px", borderStyle: "solid",
                fontSize:"30px", textAlign: "left"}}defaultValue="URL página principal">      
                </input>
            <br></br>
            <br></br>
            <button style={{backgroundColor:"White", 
                    height:"15vh", width:"80vh", 
                    marginTop:"1vh", marginLeft:"35vh",
                    fontSize:"30px",  color:"black", 
                    borderColor:"red", borderWidth:"4px",
                    borderStyle: "solid", marginRight:"3vh",
                    borderRadius: "5px"}}>Guardar Cambios</button>
            </Col>
            </Row>
        </Container>
    );
};

export default Perfil;