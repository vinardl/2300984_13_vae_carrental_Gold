import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

import clock from '../assets/icon_24hrs.png';
import complete from '../assets/icon_complete.png';
import price from '../assets/icon_price.png';
import profesional from '../assets/icon_professional.png';

export default function AppTesti(){
    return(
        <section id="whyus" className="block about-block">
            <Container style={{paddingTop:150}}>
                <h2 style={{textAlign:'left'}}>
                    Why Us ?
                </h2>
                <p style={{textAlign:'left'}}>
                    Mengapa harus pilih Binar Car Rental ?
                </p>
                <Row md="auto" style={{paddingTop:20}}>
                    <Card style={{ width: '15rem', margin:5}} className='mx-auto'>
                        <Card.Body>
                            <Card.Img variant="top" src={clock} style={{width:40,height:40, position:'relative', left:-70}} className='img-fluid' />
                            <Card.Subtitle className="mb-2 text-muted" style={{ textAlign:'left', marginTop:20}}>Mobil Lengkap</Card.Subtitle>
                            <Card.Text style={{ textAlign:'left'}}>
                            Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '15rem', margin:5}} className='mx-auto'>
                        <Card.Body>
                            <Card.Img variant="top" src={complete} style={{width:40,height:40, position:'relative', left:-70}} className='img-fluid' />
                            <Card.Subtitle className="mb-2 text-muted" style={{ textAlign:'left', marginTop:20}}>Harga Murah</Card.Subtitle>
                            <Card.Text style={{ textAlign:'left'}}>
                            Harga murah dan bersaing, bisa dibandingkan harga kami dengan rental mobil lain.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '15rem', margin:5}} className='mx-auto'>
                        <Card.Body>
                            <Card.Img variant="top" src={price} style={{width:40,height:40, position:'relative', left:-70}} className='img-fluid' />
                            <Card.Subtitle className="mb-2 text-muted" style={{ textAlign:'left', marginTop:20}}>Layanan 24 Jam</Card.Subtitle>
                            <Card.Text style={{ textAlign:'left'}}>
                            Siap melayani kebutuhan anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '15rem', margin:5}} className='mx-auto'>
                        <Card.Body>
                            <Card.Img variant="top" src={profesional} style={{width:40,height:40, position:'relative', left:-70}} className='img-fluid' />
                            <Card.Subtitle className="mb-2 text-muted" style={{ textAlign:'left', marginTop:20}}>Sopir Profesional</Card.Subtitle>
                            <Card.Text style={{ textAlign:'left'}}>
                            Sopir yang profesional, berpengalaman, jujur, ramah, dan selalu tepat waktu.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
                <br/>
            </Container>
        </section>
    )
}