import React, { useState } from 'react';
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import { Col, Row, Typography, Select } from 'antd';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined } from '@ant-design/icons';


const { Title, Text } = Typography;
const { Option } = Select;

const CryptoDetails = () => {

    const { coinId } = useParams();

    const [ timePeriod, setTimePeriod ] = useState('7d');
    // 4:21:15

    return (
        <div>CryptoDetails {coinId}</div>
    )
}

export default CryptoDetails;