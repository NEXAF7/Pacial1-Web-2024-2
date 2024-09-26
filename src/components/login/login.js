import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import fondo from '../../images/fondoLogin.jpg';
import ojo from '../../images/Ojo.png';

const Login = () => {
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
            <Row style={{height:"77vh", backgroundColor:"white", marginTop:"30vh",
                    marginLeft:"50vh", marginRight:"50vh", borderRadius: "5px",
                }}> 
            <Col>
            <image style={{height:"60px",
                    backgroundImage:`url(${ojo})`,
                    backgroundSize:"cover",
                    backgroundPosition:"center",
                    marginLeft:"142vh", marginTop:"72vh",
                    width:"100px", zIndex: 2,
                    position:"absolute",
                    top: 0, left: 0,}}>
            </image>
            <br></br>
            <text style={{marginTop:"1vh", marginLeft:"2vh", fontSize:"50px", color:"black",  fontWeight:"bold"}}>
                Log in
            </text>
            <br></br>
            <br></br>
            <br></br>
            <text style={{marginTop:"1vh", marginLeft:"2vh", fontSize:"20px", color:"black"}}>
                Email
            </text>
            <br></br>
            <input style={{borderColor:"black", height:"10vh",
                width:"100vh", marginTop:"2px", marginBottom:"10px",
                marginLeft:"2vh", borderWidth:"2px", 
                borderRadius: "3px", borderStyle: "solid",
                fontSize:"30px", textAlign: "left"}}>
                </input>
            <br></br>
            <text style={{marginTop:"1vh", marginLeft:"2vh", fontSize:"20px", color:"black"}}>
                Password
            </text>
            <input style={{borderColor:"black", height:"10vh",
                width:"100vh", marginTop:"2px", marginBottom:"10px",
                marginLeft:"2vh", borderWidth:"2px", 
                borderRadius: "3px", borderStyle: "solid",
                fontSize:"30px", textAlign: "left"}}>
                </input>
            <br></br>
            <br></br>
            <button style={{backgroundColor:"blue", 
                    height:"15vh", width:"60vh", 
                    marginTop:"1vh", marginLeft:"2vh",
                    fontSize:"30px",  color:"white",
                    borderColor:"blue", borderWidth:"2px",
                    borderStyle: "solid", marginRight:"3vh",
                    borderRadius: "5px"}}>Log In</button>
        <br></br>
            </Col>
            </Row>
        </Container>
    );
};

export default Login;