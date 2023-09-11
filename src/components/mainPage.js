import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import api from '../api';

import img1 from '../assets/img_car.png';
import { useEffect } from 'react';

export default function AppMain(){
    const login = async () => {
        try {
            const response = await api.loginAdmin({
                email: 'admin@bcr.io',
                password: '123456'
            });

            const carResponse = await api.getCars();
            const carsResponse = await api.getCarById();

            console.log('cars', carsResponse);

            localStorage.setItem('token', response.data.access_token);
            console.log('resp', response);
        } catch (error){
            console.log('err', error);
        }
    };

    useEffect(() => {
        login();
    })

    return (
        <section id="main" className="block about-block" style={{paddingBottom:2 ,backgroundColor:'#F1F3FF', justifyContent:'center'}}>
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
                        <Row>
                            <Col xs={6} md={4}>
                                <Button variant="success" href='/sewa'>Mulai Sewa Mobil</Button>
                            </Col>     
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