import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect,useState } from 'react';

import Container from 'react-bootstrap/Container';
import AppHeader from '../components/header';
import AppMainBackup from './headerSewa';
import AppContact from '../components/footer';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';


export default function AppCari(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const fMobil = document.getElementById('formMobil');

    function disMobil (){
        fMobil.style.visibility='hidden';
    }

    function shoMobil (){
        fMobil.style.visibility='visible';
    }
    
    const hargaMobil=[
        {labelHarga:'< Rp. 400.000'},
        {labelHarga:'Rp. 400.000 - Rp. 600.000'},
        {labelHarga:'< Rp. 400.000'}
    ]

    const katMobil=[
        {kategori:'2 - 4 orang'},
        {kategori:'4 - 6 orang'},
        {kategori:'6 - 8 orang'}
    ]

    return(
        <section id="cari" className="test block">
            <AppHeader />
            <AppMainBackup />
            <Container>
                    <Row md="auto">
                        <Modal show={show} onHide={handleClose} centered size='xl' style={{marginTop:75}} backdrop='static'>
                        <Modal.Header closeButton onClick={shoMobil} style={{height:5}}/>
                        <Card>
                            <Card.Body>
                                <Form>
                                    <Row className="mb-3">
                                        <Col md='auto'>
                                            <Form.Group controlId="namaMobil" id='namaM' >
                                                <Form.Label>Nama Mobil</Form.Label>
                                                <Form.Control type="text" placeholder="Ketik nama/tipe mobil"/>
                                            </Form.Group>
                                        </Col>
                                        <Col md='auto'>
                                            <Form.Group  controlId="kategori" id='kategori'>
                                                <Form.Label>Kategori</Form.Label>
                                                <Form.Select placeholder="Masukan Kapasitas Mobil">
                                                    <option>Masukan Kapasitas Mobil</option>
                                                    { katMobil.map((item) => (
                                                    <option>{item.kategori}</option>
                                                        ))
                                                    }
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col md='auto'>
                                            <Form.Group  controlId="harga" id='harga'>
                                                <Form.Label>Harga</Form.Label>
                                                    <Form.Select defaultValue="Masukan Harga Sewa Per Hari">
                                                    <option>Masukan Harga Sewa Per Hari</option>
                                                    { hargaMobil.map((item) => (
                                                        <option>{item.labelHarga}</option>
                                                        ))
                                                    }
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col md='auto'>
                                            <Form.Group  controlId="status" id='status'>
                                                <Form.Label>Status</Form.Label>
                                                <Form.Select defaultValue="Disewa">
                                                    <option>Disewa</option>
                                                    <option>Tidak Disewa</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Button  variant="success" type="submit" href='hasil' style={{borderRadius:3, marginTop:30}}>
                                                Cari Mobil
                                            </Button>
                                        </Col>                       
                                    </Row>
                                </Form>
                            </Card.Body>
                        </Card>
                        </Modal>
                        <Card style={{marginTop:-50}} className='mx-auto' id='formMobil'>
                            <Card.Body>
                                <Form>
                                    <Row className="mb-3">
                                        <Col md='auto'>
                                            <Form.Group>
                                                <Form.Label>Nama Mobil</Form.Label>
                                                <Form.Control type="text" placeholder="Ketik nama/tipe mobil" onSelect={handleShow} onClick={disMobil} id='namaM'/>
                                            </Form.Group>
                                        </Col>
                                        <Col md='auto'>
                                            <Form.Group>
                                                <Form.Label>Kategori</Form.Label>
                                                <Form.Select placeholder="Masukan Kapasitas Mobil" id='katMobil'>
                                                    <option>Masukan Kapasitas Mobil</option>
                                                    { katMobil.map((item) => (
                                                    <option>{item.kategori}</option>
                                                        ))
                                                    }
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col md='auto'>
                                            <Form.Group>
                                                <Form.Label>Harga</Form.Label>
                                                <Form.Select defaultValue="Masukan Harga Sewa Per Hari">
                                                <option >Masukan Harga Sewa Per Hari</option>
                                                { hargaMobil.map((item) => (
                                                    <option>{item.labelHarga}</option>
                                                    ))
                                                }
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group>
                                                <Form.Label>Status</Form.Label>
                                                <Form.Select defaultValue="Disewa" id='status'>
                                                    <option>Disewa</option>
                                                    <option>Tidak Disewa</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Button  variant="success" type="submit" href='hasil' style={{borderRadius:3, marginTop:30}}>
                                                Cari Mobil
                                            </Button>
                                        </Col>                       
                                    </Row>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Row>
            </Container>
            <AppContact/>
            
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
        </section>
    )
}