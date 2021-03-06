import React from 'react';
import { withRouter } from 'react-router';
import './menu-item.scss';


const MenuItem = ({ title, imageUrl, size }) => (
    <div className={`${size} menu-item`} >
        <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
        <div className='content'>
            <div className='title'>{ title.toUpperCase() }</div>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem);