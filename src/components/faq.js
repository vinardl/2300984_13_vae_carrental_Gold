import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/Image';

import arrowDown from '../assets/fi_chevron-down.png';


export default function AppFaq(){
    return(
        <section id="faq" className="test block">
            <Container style={{marginTop:100, marginBottom:50}}>
                <Row >
                    <Col sm={5} style={{marginTop:10, marginBottom:10}}>
                        <h2 style={{textAlign:'left'}}>
                            Frequently Asked Question
                        </h2>   
                        <p style={{textAlign:'left'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </p> 
                    </Col>
                    <Col sm={7} style={{marginTop:10, marginBottom:10}}>
                        <Card>
                            <Card.Body style={{textAlign:'left'}}>
                                <Row>
                                    <Col>
                                    <h6>Apa saja syarat yang dibutuhkan ?</h6>               
                                    </Col>
                                    <Col>
                                    <Image src={arrowDown} className='img-fluid' alt='...' style={{position:'absolute',right:15}} />
                                    </Col>            
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card style={{marginTop: 20}}>
                            <Card.Body style={{textAlign:'left' , fontWeight:'bold'}}>
                                <Row>
                                <Col>
                                    <h6>Berapa hari minimal sewa mobil lepas kunci ?</h6>
                                </Col>
                                <Col>
                                    <Image src={arrowDown} className='img-fluid' alt='...' style={{position:'absolute',right:15}} />
                                </Col>   
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card style={{marginTop: 20}}>
                            <Card.Body style={{textAlign:'left' , fontWeight:'bold'}}>
                                <Row>
                                    <Col>
                                    <h6>Berapa hari sebelumnya sebaiknya booking sewa mobil ?</h6>
                                    </Col>
                                    <Col>
                                    <Image src={arrowDown} className='img-fluid' alt='...' style={{position:'absolute',right:15}} />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card style={{marginTop: 20}}>
                            <Card.Body style={{textAlign:'left', fontWeight:'bold'}}>
                                <Row>
                                    <Col>
                                    <h6>Apakah ada biaya antar jemput ?</h6>
                                    </Col>
                                    <Col>
                                    <Image src={arrowDown} className='img-fluid' alt='...' style={{position:'absolute',right:15}} />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card style={{marginTop: 20}}>
                            <Card.Body style={{textAlign:'left', fontWeight:'bold'}}>
                                <Row>
                                    <Col>
                                    <h6>Bagaimana jika terjadi kecelakaan ?</h6>
                                    </Col>
                                    <Col>
                                    <Image src={arrowDown} className='img-fluid' alt='...' style={{position:'absolute',right:15}} />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>   
            </Container>
        </section>
    )
}