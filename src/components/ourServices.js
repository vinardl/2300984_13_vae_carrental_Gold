import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import img1 from '../assets/img_service.png';
import check from '../assets/image_2.png';

export default function AppServices(){
    return(
        <section id="ourservices" className="block about-block">
            <Container style={{paddingTop:150}}>
                <Row>
                    <Col sm={6}>
                    <Image src= {img1} className='img-fluid'/>
                    </Col>
                    <Col sm={6}>
                        <Row>
                            <h2 style={{ textAlign:'left'}}>
                            Best Car Rental for any kind of trip in (Lokasimu)! 
                            </h2>
                            <p style={{textAlign:'left'}}>
                            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga 
                            <br/>lebih murah dibandingkan yang lain, kondisi mobil baru, 
                            <br/>serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, 
                            <br/>weeding, meeting, dll.
                            </p>
                        </Row>
                        <Row>
                            <Col xs='auto'>
                                <Image src={check} className='img-fluid'/>
                            </Col> 
                            <Col >
                                <p style={{textAlign:'left'}}>
                                    Sewa Mobil Dengan Sopir di Bali 12 Jam
                                </p>
                            </Col>
                            
                        </Row>
                        <Row>
                            <Col xs='auto'>
                                <Image src={check} className='img-fluid'/>
                            </Col>
                            <Col>
                            <p style={{textAlign:'left'}}>
                                Sewa Mobil Lepas Kunci di Bali 12 Jam
                            </p>
                            </Col>                           
                        </Row>
                        <Row>
                            <Col xs='auto'>
                                <Image src= {check} className='img-fluid'/>
                            </Col>                           
                            <Col>
                                <p style={{textAlign:'left'}}>
                                Sewa Mobil Jangka Panjang Bulanan
                                </p>
                            </Col>                           
                        </Row>
                        <Row>
                            <Col xs='auto'>
                                <Image src= {check} className='img-fluid'/>
                            </Col>                           
                            <Col>
                                <p style={{textAlign:'left'}}>
                                    Gratis Antar - Jemput Mobil di Bandara
                                </p>
                            </Col>                           
                        </Row>
                        <Row>
                            <Col xs='auto'>
                                <Image src= {check} className='img-fluid'/>
                            </Col>                           
                            <Col>
                                <p style={{textAlign:'left'}}>
                                    Layanan Airport Transfer / Drop In Out
                                </p>
                            </Col>                           
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}