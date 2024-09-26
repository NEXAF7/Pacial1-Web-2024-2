import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import foto from '../../images/flor.jpg';
//import fotos from URL("https://fastly.picsum.photos/id/365/350/350.jpg?hmac=x5kf75e2o0cmDepd0N8ZhaihsVmYbMITEWiynkJJB3k");

const Home = () => {
    return (
        <Container fluid>
            <Row style={{height:"115vh", backgroundColor:"white", marginTop:"5vh",
                    marginLeft:"30vh", marginRight:"30vh", borderRadius: "15px",
                }}> 
            <Col>
            <br></br>
            <image style={{height:"25vh",
                    backgroundImage:`url(${foto})`,
                    backgroundSize:"cover",
                    backgroundPosition:"center",
                    marginLeft:"45vh", marginTop:"8vh",
                    width:"12%", zIndex: 1,
                    position:"absolute", borderRadius: "50%",
                    top: 0, left: 0,}}>
            </image>
            <text style={{marginTop:"1vh", marginLeft:"47vh", fontSize:"40px", color:"black"}}>
                Username
            </text>
            <br></br>
            <text style={{marginTop:"1vh", marginLeft:"47vh", fontSize:"20px", color:"black", fontWeight:"bold"}}>
                Firstname Lastname
            </text>
            <text style={{marginTop:"1vh", marginLeft:"1vh", fontSize:"20px", color:"black"}}>
                Proin at laculis arcu. Proin id mi id dolor aliquet facilisis
            </text>
            <br></br>
            <text style={{marginTop:"1vh", marginLeft:"47vh", fontSize:"20px", color:"black"}}>
                website.com
            </text>
            <br></br>
            <br></br>
            <text style={{marginTop:"1vh", marginLeft:"47vh", fontSize:"20px", color:"black", fontWeight:"bold"}}>
                870
            </text>
            <text style={{marginTop:"1vh", marginLeft:"1vh", fontSize:"20px", color:"black"}}>
                posts
            </text>
            <text style={{marginTop:"1vh", marginLeft:"4vh", fontSize:"20px", color:"black", fontWeight:"bold"}}>
                496
            </text>
            <text style={{marginTop:"1vh", marginLeft:"1vh", fontSize:"20px", color:"black"}}>
                followers
            </text>
            <text style={{marginTop:"1vh", marginLeft:"4vh", fontSize:"20px", color:"black", fontWeight:"bold"}}>
                112
            </text>
            <text style={{marginTop:"1vh", marginLeft:"1vh", fontSize:"20px", color:"black"}}>
                following
            </text>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <image style={{height:"20vh",
                    backgroundImage:`url(${foto})`,
                    backgroundSize:"cover",
                    backgroundPosition:"center",
                    marginLeft:"40vh", marginTop:"45vh",
                    width:"10%", zIndex: 1,
                    position:"absolute",
                    top: 0, left: 0,}}>
            </image>
            </Col>
            </Row>
        </Container>
    );
};

export default Home;