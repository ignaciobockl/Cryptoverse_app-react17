import React, { useEffect, useState } from 'react';
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import { Col, Row, Typography, Select } from 'antd';
import { 
    MoneyCollectOutlined, 
    DollarCircleOutlined, 
    FundOutlined, 
    ExclamationCircleOutlined, 
    StopOutlined, 
    TrophyOutlined, 
    NumberOutlined, 
    ThunderboltOutlined, 
    CheckOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

import { getCrypto } from '../actions/crypto';


const { Title, Text } = Typography;
const { Option } = Select;

let stats, genericStats = [{}];

const CryptoDetails = () => {

    const { coinId } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( getCrypto( coinId ) );
    }, [ coinId ]);
    
    const { coinSelected } = useSelector( state => state.crypto );
    const { data, status } = coinSelected;

    const [ timePeriod, setTimePeriod ] = useState('7d');

    let cryptoDetails = data?.coin || 'data.coin';

    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

    if ( typeof(cryptoDetails) !== 'string' ) {

        cryptoDetails = data?.coin;

        // ! cryptoDetails.24hVolume Error

        stats = [
            { title: 'Price to USD', value: `$ ${cryptoDetails.price && millify(cryptoDetails.price)} `, icon: <DollarCircleOutlined /> },
            { title: 'Rank', value: cryptoDetails.rank, icon: <NumberOutlined /> },
            { title: '24h Volume', value: `$ ${cryptoDetails.volume && millify(cryptoDetails.volume) || 'no data'}`, icon: <ThunderboltOutlined /> },
            { title: 'Market Cap', value: `$ ${cryptoDetails.marketCap && millify(cryptoDetails.marketCap)}`, icon: <DollarCircleOutlined /> },
            { title: 'All-time-high(daily avg.)', value: `$ ${millify(cryptoDetails.allTimeHigh.price)}`, icon: <TrophyOutlined /> },
        ];

        if ( cryptoDetails.supply.total === null ) { cryptoDetails.supply.total = 0 }

        genericStats = [
            { title: 'Number Of Markets', value: cryptoDetails.numberOfMarkets, icon: <FundOutlined /> },
            { title: 'Number Of Exchanges', value: cryptoDetails.numberOfExchanges, icon: <MoneyCollectOutlined /> },
            { title: 'Aprroved Supply', value: cryptoDetails.approvedSupply ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
            { title: 'Total Supply', value: `$ ${millify(cryptoDetails.supply.total)} `, icon: <ExclamationCircleOutlined /> },
            { title: 'Circulating Supply', value: `$ ${millify(cryptoDetails.supply.circulating) || 0}`, icon: <ExclamationCircleOutlined /> },
        ];

    }

    return (
        <Col className='coin-detail-container'>

            <Col className='coin-heading-container'>
                <Title level={ 2 } className='coin-name'>
                    { cryptoDetails.name } ({ cryptoDetails.name }-{ cryptoDetails.symbol }) Price
                </Title>
                <p>
                    { cryptoDetails.name } live price in US dollars.
                    View value statics, market cap and supply.
                </p>
            </Col>

            <Select 
                className='select-timeperiod' 
                defaultValue='7d' 
                onChange={(value) => setTimePeriod(value)}
                placeholder='Select Time Period' 
            >
                {
                    time.map((date) => 
                        <Option key={ date }>
                            { date }
                        </Option>
                    )
                }
            </Select>

            <Col className='stats-container'>
                <Col className='coin-value-statistics'>
                    
                    <Col className='coin-value=statistics-heading'>
                        <Title level={ 3 } className='coin-detailes-heading'>
                            { cryptoDetails.name } Value Statistics
                        </Title>
                        <p>
                            An overview showing the stats of { cryptoDetails.name }
                        </p>
                    </Col>
                    
                    {
                        stats !== undefined 
                            ?
                                stats.map(({ icon, title, value }, index) => (
                                    <Col className='coin-stats' key={ index }>
                                        <Col className='coin-stats-name'>
                                            <Text>{ icon }</Text>
                                            <Text>{ title }</Text>
                                        </Col>
                                        <Text className='stats'>{ value }</Text>
                                    </Col>
                                ))
                            :
                                'Loading...'
                    }                   

                </Col>
            </Col>

        </Col>
    )
}

export default CryptoDetails;