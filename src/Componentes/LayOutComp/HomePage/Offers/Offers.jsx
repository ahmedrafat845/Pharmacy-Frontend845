import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Styles from './Offers.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
function Offers() {
    const [offerCounts, setOfferCounts] = useState([]); // Initialize as empty array
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchOfferCounts = async () => {
        try {
            const response = await axios.get('https://pharmacy-backend845.vercel.app/products/getAllProducts');
            const allProducts = response.data.allProducts;
            const offerItems = allProducts.filter(item => item.offer === true);
            console.log(offerItems);
            setOfferCounts(offerItems);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOfferCounts();
    }, []);

    if (loading) return <Container><p>Loading...</p></Container>;
    if (error) return <Container><p>Error: {error}</p></Container>;

    return (
        <Container className="mt-4">
            <div className={Styles.cont}>
                <h2 className={Styles.title}>{"Top offers "}</h2>
            </div>
            <div className="row">
                {offerCounts.slice(1,13).map((item) => (
                    <div className="col-xl-2 col-md-4 col-6 mb-3" key={item._id}>
                        <Card className={Styles.card}>
                            
                            <Card.Title className={[Styles.text,Styles.category]}>{item.category}</Card.Title> 
                            <div className={Styles.offer}>Offer</div>
                            <Card.Img variant="top" className={[Styles.images]} src={item.image} />
                            <Card.Body >
                                <Card.Title className={Styles.text}>{item.name}</Card.Title>
                                <Card.Text className={[Styles.text,Styles.price]}>
                                    {Math.round((item.price - item.price * 0.2) * 100) / 100} EG
                                </Card.Text>

                                <div className={Styles.text}>
                                    <Card.Text className={[Styles.price, Styles.over]}>
                                        {item.price} EG 
                                    </Card.Text>
                                    <span className={Styles.percent}>20%</span>
                                </div>
                                <div className={Styles.contain}>
                                    <div className={Styles.heart}><FontAwesomeIcon icon={faHeart } className={Styles.ii} /></div>
                                    <Button variant="success" className={Styles.button}>
                                        Order
                                        <FontAwesomeIcon icon={faCartShopping} className={Styles.icon} />
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </Container>
    );
}

export default Offers;
