import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';

export default function CardCar(props){
    const {
        imageURL,
        name,
        price,
        onButtonClick
    } = props;

    return(
        <Col className='mx-auto'>
        <Card style={{ width: '20rem', marginBottom:30}}>
            <Card.Body>
                <Card.Img variant="top" src={imageURL} style={{width:'18rem',height:200}} className='img-fluid' />
                <p>{name}</p>
                <Card.Subtitle className="mb-2" style={{ textAlign:'left'}}>Rp. {price} / hari</Card.Subtitle>
                <p style={{ textAlign:'left'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Button  variant="success" type="submit" onClick={onButtonClick} style={{borderRadius:3}}>
                Pilih Mobil
                </Button>
            </Card.Body>
        </Card>
        </Col>
    )
}