import React from 'react';
import './menu-item.scss';


const MenuItem = ({ title }) => (
    <div className='menu-item'>
        <div className='content'>
            <div className='title'>Hats</div>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;