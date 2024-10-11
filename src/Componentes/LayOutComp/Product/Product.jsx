import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Styles from './product.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


export default function Product({categoryProducts,categoryName}) {


    return (
        <Container className={`${Styles.allProduct} mt-4`}>
            <div className={Styles.cont}>
                <h2 className={Styles.title}>{categoryName} 💊</h2>
            </div>
            <div className="row">
                {categoryProducts.map((item) => (
                    <div className="col-xl-3 col-6 mb-3" key={item._id}>
                        <Card className={Styles.card}>
                            <Card.Img variant="top" className={[Styles.images]} src={item.image} />
                            <Card.Body className={Styles.text}>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text className={Styles.price}>
                                    {item.price} EG
                                </Card.Text>
                                
                                <Button variant="success" className={Styles.button}>
                                    Add To Cart 
                                    <FontAwesomeIcon icon={faCartShopping} className={Styles.icon} />
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </Container>
    );
}

