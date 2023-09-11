import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

export default function ResCardCar(props){
    const {
        imageURL,
        name,
        price
    } = props;
    return(
        <Card className='mx-auto'>
            <Card.Body>
                <Card.Img variant="top" src={imageURL} style={{width:'18rem',height:200}} className='img-fluid' />
                    <h6>{name}</h6>
                    <p className='text-muted' style={{fontSize:14}}>6 - 8 orang</p>
                <Row style={{marginTop:50}}>
                <Col xs={6}>
                    <h6>Total :</h6>
                </Col>
                <Col xs={6}>
                    <h6>Rp {price}/hari</h6>
                </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}
