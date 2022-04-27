import React from 'react';
import { Spin, message } from 'antd';



const Loader = ( msg = '' ) => {

    const messageAntd = () => {
        message.info({
            content: msg.msg.toUpperCase(),
            className: 'custom-class',
            duration: 3,
            style: {
                marginTop: '10vh',
                marginLeft: '30vh',
                fontSize: 'medium'
            },
        });
    };

    return (
        <>
            <div className='loader'>
                <Spin />
            </div>
            {
                ( typeof msg.msg === 'string' ) && messageAntd()
            }
        </>
    )
}

export default Loader;