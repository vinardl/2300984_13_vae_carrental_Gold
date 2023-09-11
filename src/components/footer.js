import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/Image';

import facebook from '../assets/icon_facebook.png';
import instagram from '../assets/icon_instagram.png';
import mail from '../assets/icon_mail.png';
import twitch from '../assets/icon_twitch.png';
import twitter from '../assets/icon_twitter.png';

export default function AppContact(){
    return(
        <section id="contact" className="test block">
            <Container style={{marginTop:150, marginBottom:10}}>
                <Row >
                    <Col style={{textAlign:'left', marginTop:10, marginBottom:10}} sm={4}>
                        <Row style={{marginBottom:10}}>
                            <h6>Jalan Suroyo No.161 Mayangan Kota <br/> Probolonggo 672000</h6>
                        </Row>
                        <Row style={{marginBottom:10}}>
                            <h6>binarcarrental@gmail.com</h6>
                        </Row>
                        <Row style={{marginBottom:10}}>
                            <h6>081-233-334-808</h6>
                        </Row>
                    </Col>
                    <Col sm={2} style={{textAlign:'left', marginTop:10, marginBottom:10}}>
                        <Row style={{marginBottom:10}}>
                            <h6 href="/#ourservices">Our services</h6>
                        </Row>
                        <Row style={{marginBottom:10}} >
                            <h6 href="/#whyus">Why Us</h6>
                        </Row>
                        <Row style={{marginBottom:10}} >
                            <h6 href="/#testimonial">Testimonial</h6>
                        </Row>
                        <Row style={{marginBottom:10}}>
                            <h6 href="/#faq">FAQ</h6>
                        </Row>
                    </Col>
                    <Col sm={3} style={{marginTop:10, marginBottom:10}}>
                        <Row style={{marginBottom:10, textAlign:'left'}}>
                            <h6>Connect with us</h6>
                        </Row>
                        <Row >
                            <Col >
                            <Image style={{paddingRight:20}} src= {facebook} className='img-fluid' alt='facebook'/>
                            <Image style={{paddingRight:20}} src= {instagram} className='img-fluid' alt='instagram'/>
                            <Image style={{paddingRight:20}} src= {mail} className='img-fluid' alt='mail'/>
                            <Image style={{paddingRight:20}} src= {twitch} className='img-fluid' alt='twitch'/>
                            <Image style={{paddingRight:20}} src= {twitter} className='img-fluid' alt='twitter'/>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={3} style={{marginTop:10, marginBottom:10}}>
                        <Row style={{marginBottom:10, textAlign:'left'}}>
                            <h6>Copyright Binar 2022</h6>
                        </Row>
                        <Row style={{marginBottom:10, textAlign:'left', paddingLeft:15}}>
                            <p style={{color:'#0000FF' ,backgroundColor:'#0000FF', width:150}}>React-bootstrap <br/><br/></p>
                        </Row>
                    </Col>
                </Row>   
            </Container>
        </section>
    )
}