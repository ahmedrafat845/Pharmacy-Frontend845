import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Styles from './BestSeller.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function BestSeller() {
    const [BestSellerCounts, setBestSellerCounts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchBestSellerCounts = async () => {
        try {
            const response = await axios.get('https://pharmacy-backend845.vercel.app/products/getAllProducts');
            const allProducts = response.data.allProducts;
            const BestSellerItems = allProducts.filter(item => item.bestSeller === true);
            setBestSellerCounts(BestSellerItems);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBestSellerCounts();
    }, []);

    if (loading) return <Container><p>Loading...</p></Container>;
    if (error) return <Container><p>Error: {error}</p></Container>;

    return (
        <Container className="mt-4">
            <div className={Styles.cont}>
                <h2 className={Styles.title}>{"Our Best Seller "}</h2>
                <h5 className={Styles.all}>{"See All Products "} <FontAwesomeIcon icon={faArrowRight} size="1x" /></h5>
            </div>
            <div className="row">
                {BestSellerCounts.slice(0,12 ).map((item) => (
                    <div className="col-xl-2 col-md-4 col-6 mb-3" key={item._id}>
                        <Card className={Styles.card}>
                            <Card.Title className={[Styles.text,Styles.category]}>{item.category}</Card.Title> 
                            <div className={Styles.BestSeller}>BestSeller</div>
                            <Card.Img variant="top" className={[Styles.images]} src={item.image} />
                            <Card.Body className={Styles.cardBody}>
                                
                                <br></br>
                                <Card.Title className={Styles.text}>{item.name}</Card.Title>
                                <Card.Text className={[Styles.text,Styles.price,'mb-3']}>
                                    {item.price} EG
                                </Card.Text>
                                <div className={[Styles.contain]}>
                                    <div className={[Styles.heart]}><FontAwesomeIcon icon={faHeart } className={Styles.ii} /></div>
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

export default BestSeller;
