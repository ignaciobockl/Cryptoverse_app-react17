import React, { useEffect, useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';

import { getNews } from '../actions/bingNews';
import { getCryptos } from '../actions/crypto';


const { Text, Title } = Typography;
const { Option } = Select;

const demoImage = 'http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg'

const News = ({ simplified }) => { 
    
    const count = simplified ? 6 : 12;

    const [ newsCategory, setNewsCategory ] = useState('Cryptocurrency');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( getNews( count, newsCategory ) );
        dispatch( getCryptos( 100 ) );
    }, [ newsCategory ]);

    const { value } = useSelector( state => state.bingNews );
    const { coinsList: cryptosList } = useSelector( state => state.crypto );

    if ( !value ) return 'Loading... ';

    return (

        <Row gutter={[ 24, 24 ]}>

            {
                !simplified && (
                    <Col span={ 24 }>
                        <Select
                            className='select-news'
                            filterOption={ (input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 }
                            onChange={ (value) => setNewsCategory(value) }
                            optionFilterProp='children'
                            placeholder='Select a Crypto'
                            showSearch
                        >
                            <Option value='Cryptocurrency'>
                                Cryptocurrency
                            </Option>
                            { 
                                cryptosList?.coins.map((coin) => 
                                    <Option value={ coin.name } key={ coin.uuid }>
                                        { coin.name }
                                    </Option>)
                            }
                        </Select>
                    </Col>
                )
            }

            {
                value.map((news, index) => (
                    <Col xs={ 24 } sm={ 12 } lg={ 8 } key={ index }>
                        <Card hoverable className='news-card'>
                            <a href={ news.url } target='_blank' rel='noreferrer'>
                                <div className='news-image-container'>
                                    <Title className='news-title' level={ 4 }>
                                        { news.name }
                                    </Title>
                                    <img 
                                        alt='news'
                                        style={{ maxWidth: '200px', maxHeight: '100px' }} 
                                        src={news?.image?.thumbnail?.contentUrl || demoImage } 
                                    />
                                </div>
                                <p>
                                    { 
                                        news.description > 100 
                                            ? `${ news.description.substring(0, 100) }...`
                                            : news.description
                                    }
                                </p>
                                <div className='provider-container'>
                                    <div>
                                        <Avatar src={ news?.provider[0]?.image?.thumbnail?.contentUrl || demoImage } alt='news'/>
                                        <Text className='provider-name'>
                                            { news.provider[0]?.name }
                                        </Text>
                                    </div>
                                    <Text>
                                        { moment(news.datePublished).startOf('ss').fromNow() }
                                    </Text>
                                </div>
                            </a>
                        </Card>
                    </Col>
                ))
            }
        </Row>
    )
}

export default News;