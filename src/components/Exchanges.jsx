import React, { useEffect } from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
import HTMLReactParser from 'html-react-parser';
import { useDispatch, useSelector } from 'react-redux';

import { getExchangesByCrypto } from '../actions/crypto';
import Loader from './Loader';
import InConstruction from './InConstruction';

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {

    return <InConstruction />

    // const dispatch = useDispatch();

    // const { coinSelected } = useSelector( state => state.crypto );
    // const cryptoId = coinSelected?.data?.coin?.uuid;

    // useEffect(() => {
    //     dispatch( getExchangesByCrypto( cryptoId ) );
    // }, [ cryptoId ]);

    // const { coinExchanges } = useSelector( state => state.crypto );

    // if ( coinExchanges.status !== 'success' ) return <Loader msg='You must select a cryptocurrency to see the exchanges.' />;

    // const exchangesList = coinExchanges?.data?.exchanges;

    // return (
    //     <>
    //         <Row>
    //             <Col span={6}>Exchanges</Col>
    //             <Col span={6}>24h Trade Volume</Col>
    //             <Col span={6}>Markets</Col>
    //         </Row>
    //         <Row>
    //             {
    //                 exchangesList !== undefined &&
    //                 exchangesList.map((exchange) => (
    //                     <Col span={24}>
    //                         <Collapse>
    //                             <Panel
    //                                 key={ exchange.uuid }
    //                                 showArrow={ false }
    //                                 header={(
    //                                     <Row key={ exchange.uuid }>
                                        
    //                                         <Col span={6}>

    //                                           <Text>
    //                                               <strong>{ exchange.rank }.</strong>
    //                                           </Text>

    //                                           <Avatar className="exchange-image" src={ exchange.iconUrl } />

    //                                           <Text>
    //                                               <strong>{ exchange.name }</strong>
    //                                           </Text>

    //                                         </Col>
    //                                         <Col span={6}>$ { millify(exchange["24hVolume"]) }</Col>
    //                                         <Col span={6}>{ millify(exchange.numberOfMarkets) }</Col>
                                    
    //                                     </Row>
    //                                 )}
    //                             >
    //                                 { HTMLReactParser(exchange.description || 'Description not available...') }
    //                             </Panel>
    //                         </Collapse>
    //                     </Col>
    //                 )
    //             )}
    //         </Row>
    //     </>
    // )
}

export default Exchanges;