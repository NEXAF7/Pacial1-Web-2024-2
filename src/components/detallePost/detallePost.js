import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const DetallePost = () => {
    return (
        <Container>
        <Container fluid>
            <Row style={{height:"10vh", backgroundColor:"#2E3338", marginTop:"1vh"}}>             
                <Col>
                <text style={{marginTop:"1vh", marginLeft:"1vh", fontSize:"40px", color:"white"}}>
                    Navbar
                </text>
                <text style={{marginTop:"2vh", marginLeft:"4vh", fontSize:"30px", color:"white"}}>
                    Home
                </text>
                <text style={{marginTop:"2vh", marginLeft:"3vh", fontSize:"30px", color:"#8C8F92"}}>
                    Features
                </text>
                <text style={{marginTop:"2vh", marginLeft:"3vh", fontSize:"30px", color:"#8C8F92"}}>
                    Pricing
                </text>
                <text style={{marginTop:"2vh", marginLeft:"3vh", fontSize:"30px", color:"#8C8F92"}}>
                    About
                </text>
                </Col>
                <Col>
                <Row style={{backgroundColor:"white", height:"8vh", width:"50vh",
                    marginTop:"1vh", marginLeft:"24vh", borderRadius:"5px"}}>
                <text style={{marginTop:"1vh", marginLeft:"0vh", fontSize:"30px", color:"#646C73"}}>
                    Search
                </text>
                </Row>
                </Col>
                <button style={{backgroundColor:"#2E3338", 
                    height:"8vh", marginTop:"1vh",
                    marginLeft:"1vh", fontSize:"30px",
                    color:"#1B93A9", borderColor:"#1B93A9",
                    borderWidth: "3px", borderStyle: "solid",
                    width:"17vh", marginRight:"3vh",
                    borderRadius: "5px"}}>Search</button>
            </Row>
        </Container>
        <Container fluid  className="rotated">
            <Row style={{height:"10vh", backgroundColor:"#2E3338", marginTop:"1vh"}}>             
                <Col>
                <text style={{marginTop:"1vh", marginLeft:"1vh", fontSize:"40px", color:"white"}}>
                    Navbar
                </text>
                <text style={{marginTop:"2vh", marginLeft:"4vh", fontSize:"30px", color:"white"}}>
                    Home
                </text>
                <text style={{marginTop:"2vh", marginLeft:"3vh", fontSize:"30px", color:"#8C8F92"}}>
                    Features
                </text>
                <text style={{marginTop:"2vh", marginLeft:"3vh", fontSize:"30px", color:"#8C8F92"}}>
                    Pricing
                </text>
                <text style={{marginTop:"2vh", marginLeft:"3vh", fontSize:"30px", color:"#8C8F92"}}>
                    About
                </text>
                </Col>
                <Col>
                <Row style={{backgroundColor:"white", height:"8vh", width:"50vh",
                    marginTop:"1vh", marginLeft:"24vh", borderRadius:"5px"}}>
                <text style={{marginTop:"1vh", marginLeft:"0vh", fontSize:"30px", color:"#646C73"}}>
                    Search
                </text>
                </Row>
                </Col>
                <button style={{backgroundColor:"#2E3338", 
                    height:"8vh", marginTop:"1vh",
                    marginLeft:"1vh", fontSize:"30px",
                    color:"#1B93A9", borderColor:"#1B93A9",
                    borderWidth: "3px", borderStyle: "solid",
                    width:"17vh", marginRight:"3vh",
                    borderRadius: "5px"}}>Search</button>
            </Row>
    </Container>
    </Container>
    );}

export default DetallePost;