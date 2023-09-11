import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from '../api';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { createSearchParams } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import AppHeader from '../components/header';
import AppMainHasil from './headerHasil';
import AppContact from '../components/footer';
import CardCar from './cardCar';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

var dataMobil = [
    {
        image: require('../assets/avanza.jpeg'),
        car: 'Innova',
        harga: 'Rp 500.000',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        image: require('../assets/avanza.jpeg'),
        car: 'Innova',
        harga: 'Rp 500.000',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        image: require('../assets/avanza.jpeg'),
        car: 'Innova',
        harga: 'Rp 500.000',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
]


export default function AppHasil(){
    const navigate = useNavigate();
    const [carData, setCarData] = useState(null)

    const searchCar = async () => {
        try {
            const { data } = await api.getCars({
                page: 1,
                pageSize: 10
            });

            setCarData(data);
            console.log(data);
        } catch (error){
            
        }
    };

    const goToResultCarWithId = (id) => {
        navigate({
            pathname: '/detail',
            search: createSearchParams({
                idCar: id
            }).toString()
        })
    };

    useEffect(() => {
        searchCar();
    }, [])

    return(
        <section id="hasil" className="test block">
            <AppHeader />
            <AppMainHasil />
            <Container>
                    <Row md="auto" >
                        <Card style={{marginTop:-50}} className='mx-auto'>
                            <Card.Body>
                                <Form>
                                    <Row className="mb-3">
                                        <Col md='auto'>
                                            <Form.Group controlId="namaMobilHasil" id='namaMH'>
                                                <Form.Label>Nama Mobil</Form.Label>
                                                <Form.Control type="text" placeholder="Innova" />
                                            </Form.Group>
                                        </Col>
                                        <Col md='auto'>
                                            <Form.Group controlId="kategoriHasil" id='kategoriH'>
                                                <Form.Label>Kategori</Form.Label>
                                                <Form.Control type="text" placeholder="6-8 Orang" />
                                            </Form.Group>
                                        </Col>
                                        <Col md='auto'>
                                            <Form.Group controlId="hargaHasil" id='hargaH'>
                                                <Form.Label>Harga</Form.Label>
                                                <Form.Control type="text" placeholder="Rp. 400.000 - Rp. 600.000" />
                                            </Form.Group>
                                        </Col>
                                        <Col md='auto'>
                                            <Form.Group controlId="statusHasil" id='statusH'>
                                                <Form.Label>Status</Form.Label>
                                                <Form.Control type="text" placeholder="Disewa" />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Button  variant="primary" type="submit" style={{borderRadius:3, marginTop:30, color:'#0000FF', backgroundColor:'#FFFFFF', borderWidth:2}}>
                                                Edit
                                            </Button>
                                        </Col>                       
                                    </Row>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row md="auto" style={{marginTop: 50}}>
                    {
                        carData
                            ? (
                                <>
                                {carData.cars.map((item) => (
                                    <CardCar
                                        imageURL={item.image}
                                        name={item.name}
                                        price={item.price}
                                        onButtonClick={() => goToResultCarWithId(item.id)}
                                    />
                                ))} 
                                </>
                            )
                        : (<></>)
                    }
                    </Row>
            </Container>
            <AppContact/>
            
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
        </section>
    )
}