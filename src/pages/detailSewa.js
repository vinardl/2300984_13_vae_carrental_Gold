import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from '../api';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

import Container from 'react-bootstrap/Container';
import AppHeader from '../components/header';
import AppMainHasil from './headerHasil';
import AppContact from '../components/footer';
import ResCardCar from './resultCardCar';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

import avanza from '../assets/avanza.jpeg';

export default function AppHasil(){
    const loc = useLocation();

    const carId = new URLSearchParams(loc.search).get('idCar');

    const [carData, setCarData] = useState(null);
    const [image, setImage] = useState(null);

    const getCarById = async () => {
        try {
            const { data } = await api.getCarById(carId);
            setCarData(data);
            console.log('data', data);
        } catch (error) {

        }
    };

    // const changeCarName = async () => {
    //     try {
    //         const formDataBody = new FormData();
    //         formDataBody.append('name', 'Innova Kijang');
    //         formDataBody.append('price', 800000);
    //         formDataBody.append('image', image);

    //         await api.putCarById(carId, formDataBody);
    //         await getCarById();
    //     } catch (error) {

    //     }
    // }

    useEffect(() => {
        getCarById();
    }, []);

    // useEffect(() => {
    //     if (image) {
    //         console.log('im', image);
    //     }
    // }, [image]);



    return(
        <section id="hasil" className="test block">
            <AppHeader />
            <AppMainHasil />
            <Container>
                <Row md="auto" >
                        <Card style={{marginTop:-50}} className='mx-auto'>
                            <Card.Body> 
                            <h5>Pencarianmu</h5>
                                <Form>
                                    <Row className="mb-3">
                                        <Col>
                                            <Form.Group controlId="namaMobilHasil" id='namaMH'>
                                                <Form.Label className='text-muted'>Nama Mobil</Form.Label>
                                                {
                                                    carData
                                                        ? (
                                                            <>
                                                <Form.Control type="text" placeholder={carData.name} disabled/>
                                                            </>
                                                        )
                                                    : (<></>)
                                                }
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group controlId="kategoriHasil" id='kategoriH'>
                                                <Form.Label className='text-muted'>Kategori</Form.Label>
                                                <Form.Control type="text" placeholder="6-8 Orang" disabled/>
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group controlId="hargaHasil" id='hargaH'>
                                                <Form.Label className='text-muted'>Harga</Form.Label>
                                                <Form.Control type="text" placeholder="Rp. 400.000 - Rp. 600.000" disabled/>
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group controlId="statusHasil" id='statusH'>
                                                <Form.Label className='text-muted'>Status</Form.Label>
                                                <Form.Control type="text" placeholder="Disewa" disabled/>
                                            </Form.Group>
                                        </Col>                 
                                    </Row>
                                </Form>
                            </Card.Body>
                        </Card>
                </Row>
                <Row style={{marginTop:50}}>
                    <Col sm={8}>
                        <Card style={{}} className='mx-auto'>
                            <Card.Body>
                                <h6 style={{marginBottom:20}}>Tentang Paket</h6>
                                <h6>Include</h6>
                                <ul className='text-muted'>
                                    <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                                    <li>Sudah termasuk bensin selama 12 jam</li>
                                    <li>Sudah termasuk Tiket Wisata</li>
                                    <li>Sudah termasuk pajak</li>
                                </ul>
                                <h6>Exclude</h6>
                                <ul className='text-muted'>
                                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                    <li>Tidak termasuk akomodasi penginapan</li>
                                </ul>
                                <h6>Refund, Reschedule, Overtime</h6>
                                <ul className='text-muted'>
                                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                    <li>Tidak termasuk akomodasi penginapan</li>
                                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                    <li>Tidak termasuk akomodasi penginapan</li>
                                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                    <li>Tidak termasuk akomodasi penginapan</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={4}>
                    {
                        carData
                            ? (
                                <>
                                    <ResCardCar
                                        imageURL={carData.image}
                                        name={carData.name}
                                        price={carData.price}
                                        category={carData.category}
                                    />
                                </>
                            )
                        : (<></>)
                    }
                    </Col>
                </Row>
            </Container>
            <AppContact/>
            
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
        </section>
    )
}