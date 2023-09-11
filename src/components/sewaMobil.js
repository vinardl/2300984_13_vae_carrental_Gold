import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/Button';

export default function AppLok(){
    return(
        <section id="lokasi" className="test block">
            <Container style={{marginTop:50, marginBottom:10}}>
                <Row style={{paddingTop:20, alignItems:'center'}}>
                    <Col>
                        <Card style={{backgroundColor:'#0D28A6', height:'25rem', borderRadius: 20, padding:50}}>
                            <Card.Body style={{color:'#FFFFFF', alignItems:'center'}} >
                                <Col className='mx-auto'>
                                    <Row className='mx-auto'>
                                        <Card.Title>
                                            <h1>Sewa Mobil di (Lokasimu) Sekarang</h1>
                                        </Card.Title>
                                    </Row>
                                    <Row className='mx-auto'>
                                        <Card.Subtitle style={{marginTop:15,marginBottom:15}} className='mx-auto'>
                                                <h6>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/> eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </h6>
                                        </Card.Subtitle>
                                    </Row>
                                    <Row className='mx-auto'>
                                        <Col>
                                            <Button variant="success" href='/sewa'>Mulai Sewa Mobil</Button>
                                        </Col>                                    
                                    </Row>
                                </Col>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>   
            </Container>
        </section>
    )
}