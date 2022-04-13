import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Cryptocurrencies } from './index';


const { Title } = Typography;

const HomePage = () => {

    const { status, data } = useSelector( state => state.crypto );
    let stats;

    if ( status === 'success') {
        stats = data.stats;
    }

    return (
        <>
            <Title level={ 2 } className='heading'>
                Global Crypto Stats
            </Title>

            {
                stats !== undefined &&
                <Row>
                    <Col span={ 12 }>
                        <Statistic title='Total Cryptocurrencies' value={ stats.total }/>    
                    </Col>
                    <Col span={ 12 }>
                        <Statistic title='Total Exchanges' value={ millify( stats.totalExchanges ) } />     
                    </Col>
                    <Col span={ 12 }>
                        <Statistic title='Total Market Cap' value={ millify( stats.totalMarketCap ) } />      
                    </Col>
                    <Col span={ 12 }>
                        <Statistic title='Total 24h Volume' value={ millify( stats.total24hVolume ) } />     
                    </Col>
                    <Col span={ 12 }>
                        <Statistic title='Total Markets' value={ millify( stats.totalMarkets ) } />     
                    </Col>
                </Row>
            }

            <div className='home-heading-container'>
                <Title level={ 2 } className='home-title'>Top 10 Cryptocurrencies in the world</Title>
                <Title level={ 3 } className='show-more'>
                    <Link to='/cryptocurrencies'>Show More</Link>
                </Title>
            </div>
            <Cryptocurrencies simplified/>
            
            {/* 3:55:02 */}
        </>
    )
}

export default HomePage;