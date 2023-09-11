import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import img1 from '../assets/img_car.png';

export default function AppMainBackup(){
    return (
        <section id="mainB" className="block about-block" style={{paddingBottom:2 ,backgroundColor:'#F1F3FF', justifyContent:'center'}}>
            <Container style={{paddingTop:100}}>
                <Row>
                    <Col sm={6}>
                        <Row>
                            <h1 style={{ textAlign:'left'}}>
                            Sewa & Rental Mobil Terbaik di kawasan (Lokasimu) 
                            </h1>
                            <p style={{textAlign:'left'}}>
                            Selamat data diBinar Car Rental. Kami menyediakan mobil kualitas terbaik 
                            <br/>dengan harga terjangkau. Selalu siap melayani kebutuhanmu
                            <br/>untuk sewa mobil selama 24 jam.
                            </p>
                        </Row>
                    </Col>
                    <Col sm={6}>
                        <Image src= {img1} className='img-fluid' alt='...'/>
                    </Col>
                </Row>
            </Container>
        </section>
      );
}