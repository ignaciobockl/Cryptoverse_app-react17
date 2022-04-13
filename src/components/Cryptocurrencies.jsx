import React, { useEffect } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { getCryptos } from '../actions/crypto';



const Cryptocurrencies = ({ simplified }) => {
    
    const count = simplified ? 10 : 100;

    const dispatch = useDispatch(); 

    useEffect(() => {
        dispatch( getCryptos( count ) );        
    }, []);

    const { data, status } = useSelector( state => state.crypto );
    const [ cryptos, setCryptos ] = useState( data?.coins );

    useEffect(() => {
        setCryptos( data?.coins );
    }, [ data ])

    return (
        <>
            <Row gutters={[ 32, 32 ]} className='crypto-card-container'>
                {
                    cryptos !== undefined &&
                    cryptos.map((currency) => (
                    
                        <Col xs={ 24 } sm={ 12 } lg={ 6 } className='crypto-card' key={ currency.uuid }>
                            <Link to={ `/crypto/${ currency.uuid }` }>
                                <Card
                                    extra={ <img className='crypto-image' src={ currency.iconUrl } /> }
                                    hoverable
                                    title={ `${ currency.rank }. ${ currency.name }` }
                                >
                                    <p>Price: { millify( currency.price ) }</p>
                                    <p>Market Cap: { millify( currency.marketCap ) }</p>
                                    <p>Daily Change: { millify( currency.change ) }</p>
                                </Card>
                            </Link>
                        </Col>

                    ))
                }
            </Row>
        </>
    )
}

export default Cryptocurrencies;