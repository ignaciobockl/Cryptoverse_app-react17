import React from 'react'
import { BugOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';



const InConstruction = () => {
    return (
        <>
            <Row>
                <Col span={ 6 }>
                    <BugOutlined style={{ fontSize: '80px', color: '#0071bd' }}/>
                </Col>
                <Col span={8} >
                    <h1>Page under construction...</h1>
                </Col>
            </Row>
        </>
    )
}

export default InConstruction;