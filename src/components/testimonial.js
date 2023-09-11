import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';

import React, { useState, useEffect, useRef } from "react";


import * as Icon from 'react-bootstrap-icons';

export default function AppTest(){

    const [testimonialData, setTestimonialData] = useState([
        {
            id: 1,
            Image: require('../assets/img_photo-1.png'),
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
            Account: 'John Dee 32, Bromo',
            rating: 5
        },
        {
            id: 2,
            Image: require('../assets/img_photo.png'),
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
            Account: 'John Dee 32, Bromo',
            rating: 5
        },
        {
            id: 3,
            Image: require('../assets/img_photo.png'),
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
            Account: 'John Dee 32, Bromo',
            rating: 5
        }
    ])

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const ref = useRef(null);

    const onPrevClick = () => {
        ref.current.prev();
    };
    const onNextClick = () => {
        ref.current.next();
    };

    return(
        <section id="testimonial" className="test block">
            <Container style={{marginTop:50}}>
                <h2>
                    Testimonial
                </h2>
                <p>
                    Berbagai review positif dari para pelanggan kami
                </p>
                <Carousel ref={ref} style={{center: true, items:2, loop:true}}>
                    {testimonialData &&
                        testimonialData.map((item,index) => {
                            return(
                                <Carousel.Item>
                                    <Card style={{height: 300, backgroundColor:'#E8EAF6', border:0}} className='mx-auto'>
                                        <Card.Body style={{marginTop:20}}>
                                            <Row>
                                            <Col sm={3}>
                                                <Card.Img variant="top" src={item.Image} style={{width:70,height:70}} className='img-fluid' />
                                            </Col>
                                            <Col >
                                                <Row>
                                                    <Col sm={2}>
                                                    {
                                                        [...Array(item.rating)].map((rate,index) => (
                                                        <Icon.StarFill key={`rates-${index + 1}`} style={{color:'#FDD835'}}/>
                                                        ))
                                                    }
                                                    </Col>
                                                </Row>
                                                <Card.Text style={{ textAlign:'left', fontSize:14, fontWeight:'bold', marginTop:20}}>
                                                    {item.description}
                                                </Card.Text>
                                                <Card.Text style={{ textAlign:'left', fontSize:14, marginTop:20}}>
                                                    {item.Account}
                                                </Card.Text>
                                            </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Carousel.Item>
                            )
                        })
                    }  
                </Carousel> 
                <Row style={{marginTop:10}}>
                    <Col>                                      
                        <Icon.ArrowLeftCircle onClick={onPrevClick} style={{width:25,height:25, display: 'flex', marginLeft:'auto'}}/>
                    </Col>
                    <Col>
                        <Icon.ArrowRightCircle onClick={onNextClick} style={{width:25,height:25, display: 'flex', marginRight:'auto'}}/>
                    </Col>
                </Row>

                
            </Container>
            
        </section>
    )
}