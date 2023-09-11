import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import '../App.css'



export default function AppHeader(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
            <Navbar expand="lg" style={{paddingTop:30,backgroundColor:'#F1F3FF'}}>
            <Container >
                <Navbar.Brand href="/" style={{backgroundColor:'#0D28A6', color:'#0D28A6'}}>React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleShow}/>
                    <Offcanvas show={show} onHide={handleClose} responsive="sm" style={{width:250}} placement='end' className='ms-auto'>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>BCR</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav>
                                <Nav.Link href="/#ourservices" style={{width:120}}>Our Services</Nav.Link>
                                <Nav.Link href="/#whyus" style={{width:70}}>Why Us</Nav.Link>
                                <Nav.Link href="/#testimonial" >Testimonial</Nav.Link>
                                <Nav.Link href="/#faq" >FAQ</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        </Offcanvas.Body>
                    </Offcanvas>
            </Container>
            </Navbar>
    );
}
