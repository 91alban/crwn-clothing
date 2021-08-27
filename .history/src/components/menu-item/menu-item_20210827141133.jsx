import React from 'react';
import './menu-item.scss';


const MenuItem = ({ title, imageUrl }) => (
    <div style={{ backgroundImage: imageUrl }} className='menu-item'>
        <div className='content'>
            <div className='title'>{ title }</div>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;