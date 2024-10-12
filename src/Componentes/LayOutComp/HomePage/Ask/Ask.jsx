import React from 'react';
import Button from 'react-bootstrap/Button';
import styles from './Ask.module.scss';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap/esm';
import health from '../../../../images/health.png'
const Ask= () => {
    return (
        <Container className={[styles.cont, 'mt-4']}>
            <div className="row">
                <div className={['col-md-6 col-12', styles.first]}>
                    <div className={styles.firstCont}>
                        <h2>Rosheta</h2>
                        <p>Order your medications and everything you need from our pharmacy</p>
                        <Button variant="light" className={styles.button}>
                            Order Now!
                        </Button>
                    </div>
                </div>
                <div className={['col-md-6 col-12 text-center', styles.second]}>
                    <img className={styles.img} src={health} alt="health" />
                </div>
            </div>
        </Container>


    )
}

export default Ask;