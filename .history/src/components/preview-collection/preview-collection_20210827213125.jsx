import React from 'react';
import './preview-collection.scss';

const PreviewCollection = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{ title.toUpperCase() }</h1>
        <div className='preview'>
            {
                items.map(items => (
                    <div>{ item.name }</div>
                ))
            }
        </div>
    </div>
)